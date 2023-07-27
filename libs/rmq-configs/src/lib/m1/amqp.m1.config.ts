import {RabbitMQConfig, RabbitMQModule} from '@golevelup/nestjs-rabbitmq';

export function amqpM1Config(): RabbitMQConfig {
  return {
    exchanges: [
      {
        name: 'GetM1Exchange',
        type: 'topic',
      },
    ],
    uri: process.env.RABBITMQ_URI,
    connectionInitOptions: {wait: false},
    enableControllerDiscovery: true,
  }
}
