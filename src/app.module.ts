import { Module } from '@nestjs/common';
import { ProdutorModule } from './moduloprodutor/produtor.module';


@Module({
  imports: [ProdutorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
