import { Module } from '@nestjs/common';
import { ProductoController } from './controller/producto.controller';

@Module({
  controllers: [ProductoController],
})
export class ProductoModule {}
