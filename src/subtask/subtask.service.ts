import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { OrderByParams } from '../graphql'
import { CreateSubTaskInput } from './dto/create-subtask.input'

interface FilterBy {
  taskId?: number
}

@Injectable()
export class SubtaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSubTaskInput: CreateSubTaskInput) {
    return this.prisma.subtask.create({
      data: createSubTaskInput,
    })
  }

  findAll(orderBy?: OrderByParams, whereBy?: FilterBy) {
    const { field, direction } = orderBy || {}
    return this.prisma.subtask.findMany({
      orderBy: {
        [field]: direction,
      },
      where: whereBy,
    })
  }

  findOne(uniqueKey: Prisma.SubtaskWhereUniqueInput) {
    return this.prisma.subtask.findUnique({
      where: uniqueKey,
    })
  }

  update(id: number, updateSubTaskInput: Prisma.SubtaskUpdateInput) {
    return this.prisma.subtask.update({
      where: {
        id,
      },
      data: updateSubTaskInput,
    })
  }

  remove(id: number) {
    return this.prisma.subtask.delete({
      where: {
        id,
      },
    })
  }
}
