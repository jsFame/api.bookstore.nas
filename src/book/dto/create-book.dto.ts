import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  writer: string

  @IsNotEmpty()
  @IsString()
  coverImage: string

  @IsNotEmpty()
  @IsInt()
  point: number

  @IsOptional()
  @IsArray()
  tags?: string[]
}
