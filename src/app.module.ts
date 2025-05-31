import { Module } from '@nestjs/common';
import { ProdutorModule } from './moduloprodutor/produtor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgConfigService } from './config/pg.config.service';
import { ConfigModule } from '@nestjs/config';

const scriptiniciardb = require('./scripts/iniciarDB')

@Module({
  imports: [
    ProdutorModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      useClass:PgConfigService,
      inject:[PgConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
