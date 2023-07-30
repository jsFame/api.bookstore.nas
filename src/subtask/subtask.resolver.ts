import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SubtaskService } from './subtask.service'
import { CreateSubTaskInput } from './dto/create-subtask.input'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guard'

@Resolver('SubTask')
@UseGuards(GqlAuthGuard)
export class SubtaskResolver {
  constructor(private readonly subtaskService: SubtaskService) {}

  @Mutation('createSubTask')
  create(@Args('createSubTaskInput') createSubtaskInput: CreateSubTaskInput) {
    return this.subtaskService.create(createSubtaskInput)
  }

  @Query('subtasks')
  findAll() {
    return this.subtaskService.findAll()
  }

  @Query('subtask')
  findOne(@Args('id') id: number) {
    return this.subtaskService.findOne({ id })
  }

  @Mutation('updateSubTask')
  update(@Args('updateSubTaskInput') updateSubtaskInput: object) {
    return this.subtaskService.update(updateSubtaskInput['id'], updateSubtaskInput)
  }

  @Mutation('removeSubTask')
  remove(@Args('id') id: number) {
    return this.subtaskService.remove(id)
  }
}
