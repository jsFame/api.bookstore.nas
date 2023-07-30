import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBookDto: Prisma.BookCreateInput) {
    return this.prisma.book.create({ data: createBookDto })
  }

  findAll() {
    return this.prisma.book.findMany({
      where: {},
    })
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: {
        id,
      },
    })
  }

  update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    })
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id },
    })
  }
}
