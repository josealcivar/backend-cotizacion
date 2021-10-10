import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credito } from '../database/entities/creditos/credito.entity';
import { CreditoController } from './controller/credito.controller';
import { CreditoService } from './services/credito.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credito])],
  controllers: [CreditoController],
  providers: [CreditoService],
  exports: [CreditoService, TypeOrmModule],
})
export class CreditoModule {}
