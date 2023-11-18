import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from './config';
import { dataSource } from './libs/orm';

const PORT = getConfig('/port');

async function bootstrap() {
  await dataSource.initialize().then(() => console.log('DB Connected 🔥'));
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(PORT)).then(() => console.log('Server Connected 🙏'));
}
bootstrap();
