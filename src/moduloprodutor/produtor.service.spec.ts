import { faker } from '@faker-js/faker';
var fakerbr = require('faker-br');

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
import { AtualizarProdutoDTO } from "../core/domain/dto/AtualizarProdutoDTO.dto"

const criarEntidadeProduto = ()=>{

    const produtorEntity = new ProdutorEntity()

    produtorEntity.documento = fakerbr.br.cpf()
    produtorEntity.nomeProdutor = faker.person.fullName({sex:'male'})
    produtorEntity.nomefazenda = faker.company.name()
    produtorEntity.cidade = faker.location.city()
    produtorEntity.estado = faker.location.state()
    produtorEntity.area_fazenda_hecta = faker.number.int({min:2,max:10})
    produtorEntity.area_agricultavel_hecta = faker.number.int({min:4,max:8})
    produtorEntity.area_vegetacao_hecta = faker.number.int({min:2,max:4})
    produtorEntity.safra = faker.number.int({min:2020,max:2025})
    produtorEntity.cultura_plantada = faker.food.fruit()


    return produtorEntity

}

const criarDTOAtualizarProdutor = ()=>{

    let produtorAtualizar = new AtualizarProdutoDTO()
    produtorAtualizar.documento = fakerbr.br.cpf()
    produtorAtualizar.nomeProdutor = faker.person.fullName({sex:'male'})
    produtorAtualizar.nomefazenda = faker.company.name()
    produtorAtualizar.cidade = faker.location.city()
    produtorAtualizar.estado = faker.location.state()
    produtorAtualizar.area_fazenda_hecta = faker.number.int({min:2,max:10})
    produtorAtualizar.area_agricultavel_hecta = faker.number.int({min:4,max:8})
    produtorAtualizar.area_vegetacao_hecta = faker.number.int({min:2,max:4})
    produtorAtualizar.safra = faker.number.int({min:2020,max:2025})
    produtorAtualizar.cultura_plantada = faker.food.fruit()


    return produtorAtualizar

}

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

    describe('Testando Unitarios da ProdutorServices', ()=>{

        it('tesando se o serviço foi criado',()=>{
          expect(produtorService).toBeDefined()
        })

        it('testando a criacao de produtor ',async ()=>{
              const produtorEntity = criarEntidadeProduto()
              const produtorCriado =  await produtorService.criarProdutor(produtorEntity)
              expect(produtorEntity.documento).toBe(produtorCriado.documento)
              produtorService.deleteProdutor(produtorCriado.id)
        })

        it('testeando se a rotina de lista está retornando dados',async ()=>{

            const produtorEntity = criarEntidadeProduto()
            const produtorCriado =  await produtorService.criarProdutor(produtorEntity)
            
            let produtores: ProdutorEntity[] = []
            produtores = await produtorService.listaProdutores()
            const tamanho = produtores.length
            //limpar o banco
            produtorService.deleteProdutor(produtorCriado.id)

            expect(tamanho).toBeGreaterThan(0)
        })


        it('testando se rotina de listar por id está retornando dados',async ()=>{
            
            const produtorEntity = criarEntidadeProduto()
            const produtorCriado =  await produtorService.criarProdutor(produtorEntity)
            
            let produtorBuscado: ProdutorEntity | null
            produtorBuscado = await produtorService.listaProdutoresPorId(produtorCriado.id)

            //limpar o banco
            produtorService.deleteProdutor(produtorCriado.id)

            if(produtorBuscado){
                expect(produtorCriado.id).toBe(produtorBuscado.id)
            }else{
                expect(1).toBe(2)
            }

        })

        it('testando se rotina de atualizar produto por id está funcionando corretamente',async ()=>{
            
                const produtorEntity = criarEntidadeProduto()
                const produtorCriado =  await produtorService.criarProdutor(produtorEntity)

                let produtorAtualizar = criarDTOAtualizarProdutor()

                let produtorAtualizado: ProdutorEntity|any;
                produtorAtualizado = await produtorService.updateProdutor(produtorCriado.id,produtorAtualizar)

                
                if(produtorAtualizado){

                  let  produtorBuscado: ProdutorEntity | null
                  produtorBuscado = await produtorService.listaProdutoresPorId(produtorCriado.id)

                  //limpar o banco
                  await produtorService.deleteProdutor(produtorCriado.id)


                  if(produtorBuscado){

                      expect(produtorBuscado.documento).toBe(produtorAtualizar.documento)
                      expect(produtorBuscado.nomeProdutor).toBe(produtorAtualizar.nomeProdutor)
                      expect(produtorBuscado.nomefazenda).toBe(produtorAtualizar.nomefazenda)
                      
                  }else{
                      expect(1).toBe(2)
                  }
                }else{
                  expect(1).toBe(2)
                }
        })


        it('testando se rotina de deletar está funcionando corretamente',async ()=>{
            
                const produtorEntity = criarEntidadeProduto()
                const produtorCriado =  await produtorService.criarProdutor(produtorEntity)           
               
                if(produtorCriado){

                    let  produtorBuscado: ProdutorEntity | null
                    produtorBuscado = await produtorService.listaProdutoresPorId(produtorCriado.id)

                    //limpar o banco
                    await produtorService.deleteProdutor(produtorCriado.id)

                    produtorBuscado = await produtorService.listaProdutoresPorId(produtorCriado.id)

                    expect(produtorBuscado).toBe(null)

                }else{
                    expect(1).toBe(2)
                }
        })


       




    })
    
    

})
