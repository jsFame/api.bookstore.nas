import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  customerId: number

  @IsNotEmpty()
  @IsInt()
  bookId: number
}
