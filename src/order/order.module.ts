import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { UserService } from '../user/user.service'
import { BookService } from '../book/book.service'

@Module({
  controllers: [OrderController],
  providers: [OrderService, UserService, BookService],
})
export class OrderModule {}
