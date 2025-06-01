import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { IProdutorRepository } from "../core/application/ports/out/IProdutorRepository";
import { ProdutorService } from "../core/application/services/Produtor.service";
import { AtualizarProdutoDTO } from "../core/domain/dto/AtualizarProdutoDTO.dto";
import { CriarProdutorDTO } from "../core/domain/dto/CriarProdutorDTO.dto";
import { ProdutorEntity } from "../core/domain/entity/ProdutorEntity.entity";

@Controller('/produtor')
export class ProdutorController{

    constructor(
        private repo:IProdutorRepository,
        private produtorService:ProdutorService
    ){
        this.repo = repo
    }

    @Post()
    async criarProdutor(@Body() dadosusuario:CriarProdutorDTO){

        const produtorEntity = new ProdutorEntity()
        
        produtorEntity.documento = dadosusuario.documento
        produtorEntity.nomeProdutor = dadosusuario.nomeProdutor
        produtorEntity.nomefazenda = dadosusuario.nomefazenda
        produtorEntity.cidade = dadosusuario.cidade
        produtorEntity.estado = dadosusuario.estado
        produtorEntity.area_fazenda_hecta = dadosusuario.area_fazenda_hecta
        produtorEntity.area_agricultavel_hecta = dadosusuario.area_agricultavel_hecta
        produtorEntity.area_vegetacao_hecta = dadosusuario.area_vegetacao_hecta
        produtorEntity.safra = dadosusuario.safra
        produtorEntity.cultura_plantada = dadosusuario.cultura_plantada

        let retorno = await this.produtorService.criarProdutor(produtorEntity)
        return retorno;
    }

    @Get('/teste')
    async teste(){
        // return this.repo.listarProdutores()
        return {message:'ok'}
    }

    @Get()
    async listarProdutores(){
        // return this.repo.listarProdutores()
        return this.produtorService.listaProdutores()
    }

    @Get('/:id')
    async listarProdutoresPorId(@Param('id') id:number){
        // return this.repo.listarProdutores()
        const produtor = await this.produtorService.listaProdutoresPorId(id)
        return produtor;
    }

    @Put('/:id')
    async atualizarProdutor(@Param('id') id:number, @Body() dadosAtualizar:AtualizarProdutoDTO){

        await this.produtorService.updateProdutor(id,dadosAtualizar)
        const produtorAtualizado = await this.produtorService.listaProdutoresPorId(id)
        return { 
            produtor:produtorAtualizado,
            message:'Produtor Atualizado' 
        }
    }   

    @Delete('/:id')
    async deletarProdutor(@Param('id') id:number){

        const produtorRemovido = await this.produtorService.deleteProdutor(id)

        return {
            message:'Produtor Deletador'
        }
    }
}