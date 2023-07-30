import { PartialType } from '@nestjs/mapped-types'
import { CreateOrderDto } from './create-order.dto'
import { IsInt, IsOptional } from 'class-validator'

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @IsInt()
  bookId?: number
}
