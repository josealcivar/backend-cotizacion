import { Module } from '@nestjs/common';
import { CreditoController } from './credito.controller';

@Module({
  controllers: [CreditoController]
})
export class CreditoModule {}
