import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ConfigModule} from "@nestjs/config";
import {RabbitMQModule} from "@golevelup/nestjs-rabbitmq";
import {amqpApiConfig} from "@case/rmq-configs";



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot(RabbitMQModule, amqpApiConfig())
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
