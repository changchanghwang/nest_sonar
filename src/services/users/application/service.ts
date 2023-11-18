import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../domain/model';
import { SignUpBodyDto } from '../dto/signup';

@Injectable()
export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async signUp(args: SignUpBodyDto) {
    const [newUser] = await this.userRepository.find({ where: { email: args.email } });

    if (newUser) {
      throw Error(`Email(${args.email}) is already exist.`);
    }

    const user = await User.from({
      email: args.email,
      password: args.password,
    });

    await this.userRepository.save([user]);
  }
}
