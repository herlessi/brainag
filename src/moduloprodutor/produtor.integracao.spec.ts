import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';
import { v } from '@faker-js/faker/dist/airline-BUL6NtOJ';
import { CriarProdutorDTO } from '../core/domain/dto/CriarProdutorDTO.dto';
import { Helper } from '../core/domain/Helper';


function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


describe('AppController (e2e)', () => {

  

  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    global.iniciarBanco = false    
    await app.init();
  });

  afterAll(()=>{
    app.close()
  })


  it('/produtor (POST)', async () => {
  
        console.log('esperando')
        await sleep(10000)
        console.log('terminou de esperar esperando')

        const produtorEntity = Helper.criarEntidadeProduto()

        return request(app.getHttpServer())
          .post('/produtor')
          .send(produtorEntity)
          .then(resp=>{

              expect(resp.body).toBeDefined()
              expect(resp.body.documento).toBeDefined()
              expect(resp.body.documento).toBe(produtorEntity.documento)
              expect(resp.body.nomeProdutor).toBe(produtorEntity.nomeProdutor)
              expect(resp.body.nomefazenda).toBe(produtorEntity.nomefazenda)
            })
      
  }, 15*1000);


  it('/produtor (GET)', async () => {


        return request(app.getHttpServer())
          .get('/produtor')
          .then(resp=>{
            expect(resp.body).toBeDefined()
            expect(resp.body.length).toBeGreaterThanOrEqual(0)
            if(resp.body.length > 0){
                expect(resp.body[0]).toBeDefined()
                expect(typeof resp.body[0].nomeProdutor).toBe('string')
            }

          })
      
  }, 15*1000);


   it('/produtor (PUT)', async () => {


        const produtorEntityInserir = Helper.criarEntidadeProduto()
        const produtorEntityAtualizar = Helper.criarEntidadeProduto()

        return request(app.getHttpServer())
          .post('/produtor')
          .send(produtorEntityInserir)
          .then(produtorInserido=>{

                expect(produtorInserido.body).toBeDefined()
                expect(produtorInserido.body.documento).toBeDefined()
                expect(produtorInserido.body.documento).toBe(produtorEntityInserir.documento)
                expect(produtorInserido.body.nomeProdutor).toBe(produtorEntityInserir.nomeProdutor)
                expect(produtorInserido.body.nomefazenda).toBe(produtorEntityInserir.nomefazenda)

                    return request(app.getHttpServer())
                    .put('/produtor/'+produtorInserido.body.id)
                    .send(produtorEntityAtualizar)
                    .then(produtorAtualizado=>{
                         expect(produtorAtualizado.body.produtor).toBeDefined()
                          expect(produtorAtualizado.body.produtor.documento).toBeDefined()
                          expect(produtorAtualizado.body.produtor.documento).toBe(produtorEntityAtualizar.documento)
                          expect(produtorAtualizado.body.produtor.nomeProdutor).toBe(produtorEntityAtualizar.nomeProdutor)
                          expect(produtorAtualizado.body.produtor.nomefazenda).toBe(produtorEntityAtualizar.nomefazenda)

                    }).catch(error =>{
                      console.log(error)
                    })


          })
      
  }, 15*1000);




  it('/produtor (DELETE)', async () => {
  

        const produtorEntityInserir = Helper.criarEntidadeProduto()


        return request(app.getHttpServer())
          .post('/produtor')
          .send(produtorEntityInserir)
          .then(produtorInserido=>{

                expect(produtorInserido.body).toBeDefined()
                expect(produtorInserido.body.documento).toBeDefined()
                expect(produtorInserido.body.documento).toBe(produtorEntityInserir.documento)
                expect(produtorInserido.body.nomeProdutor).toBe(produtorEntityInserir.nomeProdutor)
                expect(produtorInserido.body.nomefazenda).toBe(produtorEntityInserir.nomefazenda)

                    return request(app.getHttpServer())
                    .delete('/produtor/'+produtorInserido.body.id)
                    .then(resp=>{

                      expect(resp.body.message).toEqual('Produtor Deletador')
                         
                      return request(app.getHttpServer())
                      .get('/produtor/'+produtorInserido.body.id)
                      .then(respgetid=>{
                        expect(respgetid.body.id).toBeUndefined()
                      })

                    }).catch(error =>{
                      console.log('+++++++++', error)
                    })


          })
      
  }, 50*1000);


});
