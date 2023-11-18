import { Column, Entity, PrimaryColumn } from 'typeorm';
import { nanoid } from 'nanoid';
import { hashPassword } from '../../../libs/security';

type CtorType = {
  email: string;
  password: string;
};

@Entity()
export class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  private constructor(args: CtorType) {
    if (args) {
      this.id = nanoid(10);
      this.email = args.email;
      this.password = args.password;
    }
  }

  static async from(args: CtorType) {
    const password = await hashPassword(args.password);
    const user = new User({
      ...args,
      password,
    });
    return user;
  }
}
