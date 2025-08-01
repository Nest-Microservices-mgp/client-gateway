import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from 'src/config';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.ordersMicroserviceHost,
          port: envs.ordersMicroservicePort,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
