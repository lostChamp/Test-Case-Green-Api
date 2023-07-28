import { Controller} from '@nestjs/common';
import { M1Service } from './m1.service';
import {RabbitRPC} from "@golevelup/nestjs-rabbitmq";
import {Payload} from "@nestjs/microservices";
import {getHelloM1Config} from "@case/rmq-configs";
import {HelloM1Contract} from "@case/contracts";

@Controller()
export class M1Controller {
  constructor(private readonly m1Service: M1Service) {}

  @RabbitRPC(getHelloM1Config())
  async getHello(@Payload() name: HelloM1Contract.Request) {
    return this.m1Service.helloName(name);
  }
}
