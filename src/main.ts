import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册 pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 过滤掉 DTO 中没有的属性
      // forbidNonWhitelisted: true, // 如果 DTO 中没有的属性，抛出异常
      // transform: true, // 自动转换 payload 中的类型
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
