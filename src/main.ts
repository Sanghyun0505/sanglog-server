import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //들어오는 데이터에서 유효하지 않은 속성을 자동으로 제거하도록 하는 옵션
      forbidNonWhitelisted: true, // 맞지않는 값을 보낼 때 에러를 보낸다.
      transform: true,
    }),
  );
  await app.listen(8080);
}
bootstrap();
