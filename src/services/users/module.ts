import { Column, Entity, PrimaryColumn } from 'typeorm';
import { nanoid } from 'nanoid';

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

  constructor(args: CtorType) {
    if (args) {
      this.id = nanoid(10);
      this.email = args.email;
      this.password = args.password;
    }
  }
}
