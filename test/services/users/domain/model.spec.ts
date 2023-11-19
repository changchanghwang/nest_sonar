import { nanoid } from 'nanoid';
import { User } from '../../../../src/services/users/domain/model';
import { hashPassword } from '../../../../src/libs/security';

jest.mock('nanoid');
jest.mock('../../../libs/security');

describe('User 도메인 테스트', () => {
  beforeEach(() => {
    const mockedNanoid = nanoid as jest.Mock<string>;
    mockedNanoid.mockImplementation(() => 'mockNanoId');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('from 테스트', () => {
    test('유저를 생성할 수 있다.', async () => {
      const mockedHashPassword = hashPassword as jest.Mock<Promise<string>>;
      mockedHashPassword.mockImplementation(() => Promise.resolve('mockPassword'));
      const user = await User.from({
        email: 'test@email.com',
        password: 'test1234',
      });

      expect(user).toEqual({
        id: 'mockNanoId',
        email: 'test@email.com',
        password: 'mockPassword',
      });
    });
  });
});
