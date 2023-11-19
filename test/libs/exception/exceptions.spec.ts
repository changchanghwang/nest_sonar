import {
  BadRequestException,
  ForbiddenException,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { badRequest, forbidden, notImplemented, unauthorized } from '../../../src/libs/exception/exceptions';

describe('Exception 테스트', () => {
  describe('badRequest', () => {
    test('BadRequestException을 생성한다', () => {
      const result = badRequest('test', {
        errorMessage: 'testtest',
      });
      expect(result).toEqual(new BadRequestException({ message: 'test', errorMessage: 'testtest' }));
    });
  });
  describe('forbidden', () => {
    test('ForbiddenException을 생성한다', () => {
      const result = forbidden('test', {
        errorMessage: 'testtest',
      });
      expect(result).toEqual(new ForbiddenException({ message: 'test', errorMessage: 'testtest' }));
    });
  });
  describe('unauthorized', () => {
    test('UnauthorizedException을 생성한다', () => {
      const result = unauthorized('test', {
        errorMessage: 'testtest',
      });
      expect(result).toEqual(new UnauthorizedException({ message: 'test', errorMessage: 'testtest' }));
    });
  });
  describe('notImplemented', () => {
    test('NotImplementedException을 생성한다', () => {
      const result = notImplemented('test', {
        errorMessage: 'testtest',
      });
      expect(result).toEqual(new NotImplementedException({ message: 'test', errorMessage: 'testtest' }));
    });
  });
});
