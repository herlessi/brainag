import { Module } from '@nestjs/common';
import { ProdutorModule } from './moduloprodutor/produtor.module';

const scriptiniciardb = require('./scripts/iniciarDB')

@Module({
  imports: [ProdutorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
