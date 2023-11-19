import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './services/users/module';
import { getConfig } from './config';

const ORM_CONFIG = getConfig('/ormConfig');

@Module({
  imports: [TypeOrmModule.forRoot(ORM_CONFIG), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
