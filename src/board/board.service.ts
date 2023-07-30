import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

import { Prisma } from '@prisma/client'
import { OrderByParams } from '../graphql'

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBoardInput: Prisma.BoardUncheckedCreateInput) {
    return this.prisma.board.create({
      data: createBoardInput,
    })
  }

  findAll(where?: { walletId: number }, orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {}
    return this.prisma.board.findMany({
      where: where,
      orderBy: {
        [field]: direction,
      },
    })
  }

  findOne(uniqueKey: Prisma.BoardWhereUniqueInput) {
    return this.prisma.board.findUnique({
      where: uniqueKey,
    })
  }

  update(
    id: number,
    updateBoardInput: Prisma.BoardUncheckedUpdateInput,
    filter: { walletId: number },
  ) {
    return this.prisma.board.update({
      where: {
        id,
        ...filter,
      },
      data: updateBoardInput,
    })
  }

  remove(id: number, walletId: number) {
    return this.prisma.board.delete({
      where: {
        id,
        walletId,
      },
    })
  }
}
class updateBy {
  walletId: number
}
