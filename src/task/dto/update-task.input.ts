import { TaskUpdateInput } from '../../@generated/prisma-nestjs-graphql/task/task-update.input'

export class UpdateTaskInput extends TaskUpdateInput {
  id: number
}
