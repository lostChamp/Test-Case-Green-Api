/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { M1Module } from './app/m1.module';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 8081;
  await app.listen(port);
  Logger.log(
    `🚀 Application M1 is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
