import {Body, Controller, Get, Post} from '@nestjs/common';
import {AmqpConnection} from "@golevelup/nestjs-rabbitmq";
import {HelloUserDto} from "./dtos/hello-user.dto";
import {getHelloM1Config} from "@case/rmq-configs";
import {HelloM1Contract} from "@case/contracts";


@Controller("/helloApp")
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post("/byName")
  async getHelloByName(@Body() name: HelloUserDto) {
    const helloName = await this.amqpConnection.request<HelloM1Contract.Response>({
      ...getHelloM1Config(),
      payload: name,
    });
    console.log(helloName);
  }

}
