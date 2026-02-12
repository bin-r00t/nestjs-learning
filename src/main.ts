import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册 pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
