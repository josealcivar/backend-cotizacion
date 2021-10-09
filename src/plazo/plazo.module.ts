import { Module } from '@nestjs/common';
import { PlazoController } from './plazo.controller';

@Module({
  controllers: [PlazoController]
})
export class PlazoModule {}
