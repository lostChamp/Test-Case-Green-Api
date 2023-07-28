import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { M1Module } from './app/m1.module';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);
  await app.init();
  Logger.log(
    `🚀 Application M1 is running`
  );
}

bootstrap();
