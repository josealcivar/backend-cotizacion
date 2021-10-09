import { Module } from '@nestjs/common';
import { PlazoController } from './controller/plazo.controller';

@Module({
  controllers: [PlazoController],
})
export class PlazoModule {}
