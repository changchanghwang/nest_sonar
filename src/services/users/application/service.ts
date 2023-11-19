import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/model';
import { SignUpBodyDto } from '../dto/signup/post';
import { unauthorized } from '../../../libs/exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(args: SignUpBodyDto) {
    const [newUser] = await this.userRepository.find({ where: { email: args.email } });

    if (newUser) {
      throw unauthorized(`Email(${args.email}) is already exist.`, {
        errorMessage: '이미 존재하는 이메일입니다.',
      });
    }

    const user = await User.from({
      email: args.email,
      password: args.password,
    });

    await this.userRepository.save([user]);
  }
}
