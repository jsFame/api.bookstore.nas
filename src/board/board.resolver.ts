import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { BoardService } from './board.service'
import { Board, CreateBoardInput, OrderByParams, UpdateBoardInput } from '../graphql'
import { ColumnService } from '../column/column.service'
import { ForbiddenException, UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guard'
import { GraphqlContext } from '../app.dto'
import { GetUserGraphql } from '../auth/decorator'

@Resolver('Board')
@UseGuards(GqlAuthGuard)
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,
    private readonly columnService: ColumnService,
  ) {}

  @Query('boards')
  findAll(
    @GetUserGraphql('walletId') walletId: number,
    @Args('orderBy') orderBy?: OrderByParams,
  ) {
    return this.boardService.findAll({ walletId }, orderBy)
  }

  @Query('board')
  findOne(@GetUserGraphql('walletId') walletId: number, @Args('id') id: number) {
    return this.boardService.findOne({ id, walletId })
  }

  @Mutation('createBoard')
  create(
    @Args('data') createBoardInput: CreateBoardInput,
    @Context() ctx: GraphqlContext,
  ) {
    const { user } = ctx.req
    console.log({ user })
    const walletId = user.walletId

    console.debug({ walletId })
    if (!walletId) {
      throw new ForbiddenException('walletID not found')
    }

    console.debug({ createBoardInput })

    return this.boardService.create({
      ...createBoardInput,
      walletId: createBoardInput.walletId ?? walletId,
    })
  }
  @Mutation('updateBoard')
  update(
    @GetUserGraphql('walletId') walletId: number,
    @Args('id')
    id: number,
    @Args('data') updateBoardInput: UpdateBoardInput,
  ) {
    return this.boardService.update(id, updateBoardInput, { walletId })
  }

  @Mutation('deleteBoard')
  remove(@GetUserGraphql('walletId') walletId: number, @Args('id') id: number) {
    return this.boardService.remove(id, walletId)
  }

  @ResolveField('columns')
  columns(@Parent() board: Board) {
    return this.columnService.findAll(null, { boardId: board.id })
  }
}
