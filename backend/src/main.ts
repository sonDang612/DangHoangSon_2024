import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import { GlobalExceptionFilter } from './utils/global-exceptions-filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.use(
    cors({
      origin: 'https://dang-hoang-son-2024-46gc.vercel.app',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
    }),
  );
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(5000);
}
bootstrap();
