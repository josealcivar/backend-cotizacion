import { Module } from '@nestjs/common';
import { CreditoController } from './controller/credito.controller';

@Module({
  controllers: [CreditoController],
})
export class CreditoModule {}
