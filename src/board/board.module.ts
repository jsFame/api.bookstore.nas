import { Module } from '@nestjs/common'
import { BoardService } from './board.service'
import { BoardResolver } from './board.resolver'
import { PrismaService } from '../prisma/prisma.service'
import { ColumnService } from '../column/column.service'

@Module({
  providers: [BoardResolver, BoardService, PrismaService, ColumnService],
})
export class BoardModule {}
