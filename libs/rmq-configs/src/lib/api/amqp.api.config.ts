import {RabbitMQConfig} from '@golevelup/nestjs-rabbitmq';
import * as process from 'process';

export function amqpApiConfig(): RabbitMQConfig {
  return {
    exchanges: [
      {
        name: 'PostApiExchange',
        type: 'topic',
      },
    ],
    uri: process.env.RABBITMQ_URI,
    connectionInitOptions: {wait: false},
    enableControllerDiscovery: true,
  }
}
