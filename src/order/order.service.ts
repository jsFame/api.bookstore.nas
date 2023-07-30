import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { UserService } from '../user/user.service'
import { BookService } from '../book/book.service'

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly orderService: OrderService,
    private readonly userService: UserService,
    private readonly bookService: BookService,
  ) {}

  async create(createOrderDto: Prisma.OrderUncheckedCreateInput) {
    const user = await this.userService.findOne(createOrderDto.customerId)
    if (!user) {
      throw new ForbiddenException("user doesn't exist")
    }

    const book = await this.bookService.findOne(createOrderDto.bookId)
    if (!book) {
      throw new NotFoundException("book: doesn't exist")
    }

    if (book.point > user.point)
      throw new ForbiddenException("user doesn't have enough point")

    const netPoint = user.point - book.point

    return await this.prisma.$transaction([
      this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          point: netPoint,
        },
      }),
      this.prisma.order.create({ data: createOrderDto }),
    ])
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
