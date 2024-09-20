import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  // app.useGlobalFilters(new GlobalExceptionFilter());
  app.use(
    cors({
      origin: 'https://dang-hoang-son-2024-46gc.vercel.app',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
    }),
  );
  await app.listen(5000);
}
bootstrap();
