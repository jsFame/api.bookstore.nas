import { Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { GetUserGraphql } from '../auth/decorator'
import { User } from '@prisma/client'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly userController: UserController,
  ) {}

  @Query('me')
  me(@GetUserGraphql() user: User) {
    return this.userController.getMe(user)
  }
}
