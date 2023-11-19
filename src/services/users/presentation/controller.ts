import { Body, ClassSerializerInterceptor, Controller, Injectable, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from '../application/service';
import { SignUpBodyDto } from '../dto';

@Controller('users')
@Injectable()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signup(@Body() body: SignUpBodyDto): Promise<void> {
    const { email, password } = body;
    await this.userService.signUp({
      email,
      password,
    });
  }
}
