import {RabbitMQConfig} from '@golevelup/nestjs-rabbitmq';

export function amqpM1Config(): RabbitMQConfig {
  return {
    exchanges: [
      {
        name: 'PostM1Exchange',
        type: 'topic',
      },
    ],
    uri: process.env.RABBITMQ_URI,
    connectionInitOptions: {wait: false},
    enableControllerDiscovery: true,
  }
}
