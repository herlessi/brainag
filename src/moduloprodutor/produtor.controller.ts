import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { IProdutorRepository } from "src/core/application/ports/out/IProdutorRepository";
import { ProdutorService } from "src/core/application/services/Produtor.service";
import { AtualizarProdutoDTO } from "src/core/domain/dto/AtualizarProdutoDTO.dto";
import { CriarProdutorDTO } from "src/core/domain/dto/CriarProdutorDTO.dto";
import { ProdutorEntity } from "src/core/domain/entity/ProdutorEntity.entity";

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

        this.produtorService.criarProdutor(produtorEntity)
        return produtorEntity;
    }

    @Get()
    async listarProdutores(){
        // return this.repo.listarProdutores()
        return this.produtorService.listaProdutores()
    }

    @Put('/:id')
    async atualizarProdutor(@Param('id') id:number, @Body() dadosAtualizar:AtualizarProdutoDTO){
        console.log('passando na atualizar')
        await this.produtorService.updateProdutor(id,dadosAtualizar)
        const produtorAtualizado = await this.produtorService.listaProdutoresPorId(id)
        return { 
            produtor:produtorAtualizado,
            message:'Produtor Atualizado' 
        }
    }   

    @Delete('/:id')
    async deletarProdutor(@Param('id') id:number){
        console.log('passando na deletar')
        const produtorRemovido = await this.produtorService.deleteProdutor(id)

        return {
            message:'Produtor Deletador'
        }
    }
}