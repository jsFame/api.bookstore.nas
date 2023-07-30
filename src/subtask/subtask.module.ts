import { Module } from '@nestjs/common'
import { SubtaskService } from './subtask.service'
import { SubtaskResolver } from './subtask.resolver'

@Module({
  providers: [SubtaskResolver, SubtaskService],
})
export class SubtaskModule {}
