// import { Test, TestingModule } from '@nestjs/testing';
// import { ProdutorService } from '../core/application/services/Produtor.service';
// import { IProdutorRepository } from 'src/core/application/ports/out/IProdutorRepository';
// import { ProdutorRepository } from 'src/adapters/drivens/produtor.reposistory';
// import { ProdutorEntity } from 'src/core/domain/entity/ProdutorEntity.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';


// describe('ModuloProdutor', () => {
//   let produtorService: ProdutorService

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       imports:[TypeOrmModule.forFeature([ProdutorEntity])],
//       providers:[
//            ProdutorService,
//           { provide: IProdutorRepository, useClass: ProdutorRepository },
//       ]
//     }).compile();

//     produtorService = app.get<ProdutorService>(ProdutorService);
//   });

  
// });


import { Test,TestingModule } from "@nestjs/testing"
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm"
import { ProdutorRepository } from "../adapters/drivens/produtor.reposistory"
import { ProdutorService } from "../core/application/services/Produtor.service"
import { ProdutorEntity } from "../core/domain/entity/ProdutorEntity.entity"
import { IProdutorRepository } from "../core/application/ports/out/IProdutorRepository"

// describe('teste', ()=>{
  
//     let produtorRepository:ProdutorRepository;
//     let produtorService: ProdutorService;


//     beforeEach(async ()=>{
//         const module:TestingModule = await Test.createTestingModule({
//           providers:[ProdutorService,ProdutorRepository,
//             {provide:getRepositoryToken(ProdutorEntity), useFactory:jest.fn}
//           ]
//         }).compile()
        
//         produtorRepository = await module.resolve(ProdutorRepository)
//         produtorService = await module.resolve(ProdutorService)
//     })

//     describe('Testando ProdutorServices', ()=>{
//         it('teste',()=>{
//           expect(produtorService).toBeDefined()
//         })

//     //     it('teste2 ',()=>{
//     //       const produtorEntity = new ProdutorEntity()
        
//     //       produtorEntity.documento = '00000'
//     //       produtorEntity.nomeProdutor = 'dadosusuario.nomeProdutor'
//     //       produtorEntity.nomefazenda = 'dadosusuario.nomefazenda'
//     //       produtorEntity.cidade = 'dadosusuario.cidade'
//     //       produtorEntity.estado = 'dadosusuario.estado'
//     //       produtorEntity.area_fazenda_hecta = 2
//     //       produtorEntity.area_agricultavel_hecta = 2
//     //       produtorEntity.area_vegetacao_hecta = 2
//     //       produtorEntity.safra =2
//     //       produtorEntity.cultura_plantada = 'teste'

//     //       produtorService.criarProdutor(produtorEntity)
//     //     })
//     })
    
    

// })


// describe('teste', ()=>{
  
//     let produtorService: ProdutorService;


//     beforeEach(async ()=>{
//         const module: TestingModule = await Test.createTestingModule({
//           imports:[TypeOrmModule.forFeature([ProdutorEntity])],
//           providers:[ProdutorService,
//             {provide:getRepositoryToken(ProdutorEntity), useClass:ProdutorRepository},
//             { provide: IProdutorRepository, useClass: ProdutorRepository }
//           ]
//         }).compile()
              
//         produtorService = module.get<ProdutorService>(ProdutorService)
//     })

//     describe('Testando ProdutorServices', ()=>{
//         it('teste',()=>{
//           expect(produtorService).toBeDefined()
//         })

//         it('teste2 ',()=>{
//               const produtorEntity = new ProdutorEntity()
            
//               produtorEntity.documento = '00000'
//               produtorEntity.nomeProdutor = 'dadosusuario.nomeProdutor'
//               produtorEntity.nomefazenda = 'dadosusuario.nomefazenda'
//               produtorEntity.cidade = 'dadosusuario.cidade'
//               produtorEntity.estado = 'dadosusuario.estado'
//               produtorEntity.area_fazenda_hecta = 2
//               produtorEntity.area_agricultavel_hecta = 2
//               produtorEntity.area_vegetacao_hecta = 2
//               produtorEntity.safra =2
//               produtorEntity.cultura_plantada = 'teste'

//               //  produtorService.criarProdutor(produtorEntity)
//               expect(1).toBe(1)
//         })


//     })
    
    

// })

import { ConfigService } from "@nestjs/config";

describe('teste', ()=>{
  
    let produtorService: ProdutorService;

    const TypeORMPosgresTestingModule = (entities: any[]) =>
      TypeOrmModule.forRoot({
        type:'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'admin',
        database:'brainag',
        entities:[__dirname + '/../**/*.entity{.js,.ts}'],
        synchronize:true 
  });               

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
        imports: [
          TypeORMPosgresTestingModule([ProdutorEntity]),
          TypeOrmModule.forFeature([ProdutorEntity]),
        ],
        providers: [ProdutorService],
      }).compile()
              
        produtorService = module.get<ProdutorService>(ProdutorService)
    })

    describe('Testando ProdutorServices', ()=>{
        it('tesando se o serviço foi criado',()=>{
          expect(produtorService).toBeDefined()
        })

        it('testando a criacao de produtor ',async ()=>{
              const produtorEntity = new ProdutorEntity()
            
              produtorEntity.documento = '00000'
              produtorEntity.nomeProdutor = 'dadosusuario.nomeProdutor'
              produtorEntity.nomefazenda = 'dadosusuario.nomefazenda'
              produtorEntity.cidade = 'dadosusuario.cidade'
              produtorEntity.estado = 'dadosusuario.estado'
              produtorEntity.area_fazenda_hecta = 2
              produtorEntity.area_agricultavel_hecta = 2
              produtorEntity.area_vegetacao_hecta = 2
              produtorEntity.safra =2
              produtorEntity.cultura_plantada = 'teste'

              const produtorCriado =  await produtorService.criarProdutor(produtorEntity)
              expect(produtorEntity.documento).toBe(produtorCriado.documento)
              produtorService.deleteProdutor(produtorCriado.id)
        })

        it('testeando se lista é ordenado',async ()=>{

            let produtores: ProdutorEntity[] = []
            produtores = await produtorService.listaProdutores()
            const tamanho = produtores.length
            expect(tamanho).toBeGreaterThan(0)
        })




    })
    
    

})
