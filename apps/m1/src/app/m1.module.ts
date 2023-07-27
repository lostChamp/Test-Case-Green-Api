import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { M1Controller } from './m1.controller';
import { M1Service } from './m1.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import {amqpM1Config} from "../../../../libs/rmq-configs/src";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    RabbitMQModule.forRoot(RabbitMQModule, amqpM1Config())
  ],
  controllers: [M1Controller],
  providers: [M1Service],
})
export class M1Module {}
