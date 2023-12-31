import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Patch,
  UseGuards,
} from '@nestjs/common'
import { JwtGuard } from '../auth/guard'
import { GetUser } from '../auth/decorator'
import { User } from '@prisma/client'
import { EditUserDto } from './dto'
import { UserService } from './user.service'

@Injectable()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser('userId') user: User) {
    return this.userService.findOne(user.id)
  }

  @UseGuards(JwtGuard)
  @Patch()
  editUser(@GetUser('userId') userId: number, @Body() dto: EditUserDto) {
    //needs service
    // we will get something in api request due to whitelist:true
    return this.userService.editUser(userId, dto)
  }

  @UseGuards(JwtGuard)
  @Delete()
  async deleteUser(@GetUser('userId') userId: number) {
    return {
      message: 'user deleted',
      user: await this.userService.deleteUser(userId),
    }
  }
}
