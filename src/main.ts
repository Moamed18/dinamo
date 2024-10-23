import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,         // Removes properties that don't have decorators
    forbidNonWhitelisted: true, // Throws an error if any extra properties are present
    transform: true,           // Automatically transforms payloads to match the DTO types
  }));
  await app.listen(3000);
}
bootstrap();
