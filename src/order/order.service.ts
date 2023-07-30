import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderDto: Prisma.OrderCreateInput) {
    return this.prisma.order.create({ data: createOrderDto })
  }

  findAll() {
    return this.prisma.order.findMany({
      where: {},
    })
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    })
  }

  update(id: number, updateOrderDto: Prisma.OrderUncheckedUpdateInput) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    })
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    })
  }
}
