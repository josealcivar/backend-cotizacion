import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { PlazoModule } from './plazo/plazo.module';
import { CreditoModule } from './credito/credito.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductoModule, PlazoModule, CreditoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
