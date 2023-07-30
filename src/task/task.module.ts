import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskResolver } from './task.resolver'
import { SubtaskService } from '../subtask/subtask.service'

@Module({
  providers: [TaskResolver, TaskService, SubtaskService],
})
export class TaskModule {}
