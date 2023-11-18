import { Module } from '@nestjs/common';
import { UserController } from './presentation/controller';
import { UserService } from './application/service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
