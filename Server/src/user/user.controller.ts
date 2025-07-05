import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { privateDecrypt } from 'crypto';
import { User } from 'src/entity/User.schema';
import AuthService from 'src/services/auth.service';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('/signup')
  Signup(@Body() data: User) {
    const createdUser = this.authService.Signup(data);
    return createdUser;
  }

  @Post('/login')
  Login(@Body() data: Partial<User>) {
    const LoggedInUser = this.authService.Login(data);
    return LoggedInUser;
  }
}
