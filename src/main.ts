import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { getConfig } from './config';
import { HttpExceptionFilter } from './libs/exception';

const PORT = getConfig('/port');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('!!!', PORT);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(Number(PORT)).then(() => console.log('Server Connected 🙏'));
}
bootstrap();
