import { Module, Global } from '@nestjs/common';
import { ConfigType, ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { Producto } from './entities/productos/producto.entity';
import { Plazo } from './entities/plazos/plazo.entity';
import { Credito } from './entities/creditos/credito.entity';
import config from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, dbName, password, port } =
          configService.postgres;

        return {
          type: 'postgres',
          username, //'root',
          host, //'localhost',
          database: dbName, //'my_db',
          password, //'123456',
          port,
          synchronize: false,
          autoLoadEntities: true,
          entities: [Credito, Plazo, Producto],
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      // useValue: client,
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, dbName, password, port } =
          configService.postgres;
        const client = new Client({
          user: username, //'root',
          host: host, //'localhost',
          database: dbName, //'my_db',
          password: password, //'123456',
          port: port,
        });

        client.connect();
        return client;
      }, //client,
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
