import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { SignUpBodyDto } from './post';

describe('post dto 테스트', () => {
  test('CreateBodyDto 테스트', async () => {
    const dto = plainToInstance(SignUpBodyDto, {
      email: 'test@email.com',
      password: 'testedPassword',
    });

    const errors = await validate(dto);
    expect(errors).toHaveLength(0);
  });
});
