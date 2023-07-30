import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderService } from './order.service'
import { UpdateOrderDto } from './dto/update-order.dto'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto)
  }

  @Get()
  findAll() {
    return this.orderService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orderService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderService.remove(+id)
  }
}
