import {RmqConfig} from "../types";

export const getHelloM1Config = (): RmqConfig => {
  return {
    exchange: "PostM1Exchange",
    routingKey: "get-hello",
    queue: "GetSimpleHello"
  }
}

