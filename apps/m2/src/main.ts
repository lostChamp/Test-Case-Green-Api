/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { M2Module } from './app/m2.module';

async function bootstrap() {
  const app = await NestFactory.create(M2Module);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 8082;
  await app.listen(port);
  Logger.log(
    `🚀 Application M2 is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
