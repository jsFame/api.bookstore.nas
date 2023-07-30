import { Module } from '@nestjs/common'
import { ColumnService } from './column.service'
import { ColumnResolver } from './column.resolver'
import { TaskService } from '../task/task.service'

@Module({
  providers: [ColumnResolver, ColumnService, TaskService],
})
export class ColumnModule {}
