import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ColumnService } from './column.service'
import { CreateColumnInput } from './dto/create-column.input'
import { Column } from '../graphql'
import { TaskService } from '../task/task.service'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guard'

@Resolver('Column')
@UseGuards(GqlAuthGuard)
export class ColumnResolver {
  constructor(
    private readonly columnService: ColumnService,
    private readonly taskService: TaskService,
  ) {}

  @Mutation('createColumn')
  create(@Args('createColumnInput') createColumnInput: CreateColumnInput) {
    return this.columnService.create(createColumnInput)
  }

  @Query('columns')
  findAll() {
    return this.columnService.findAll()
  }

  @Query('column')
  findOne(@Args('id') id: number) {
    return this.columnService.findOne({ id })
  }

  @Mutation('updateColumn')
  update(@Args('updateColumnInput') updateColumnInput: object) {
    return this.columnService.update(updateColumnInput['id'], updateColumnInput)
  }

  @Mutation('removeColumn')
  remove(@Args('id') id: number) {
    return this.columnService.remove(id)
  }

  @ResolveField('tasks')
  tasks(@Parent() column: Column) {
    return this.taskService.findAll(null, { columnId: column.id })
  }
}
