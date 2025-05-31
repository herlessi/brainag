import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { IProdutorRepository } from "src/core/application/ports/out/IProdutorRepository";
import { AtualizarProdutoDTO } from "src/core/domain/dto/AtualizarProdutoDTO.dto";
import { CriarProdutorDTO } from "src/core/domain/dto/CriarProdutorDTO.dto";
import { ProdutorEntity } from "src/core/domain/entity/ProdutorEntity.entity";

@Controller('/produtor')
export class ProdutorController{

    constructor(
        private repo:IProdutorRepository
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
        this.repo.salvar(produtorEntity)
        return produtorEntity;
    }

    @Get()
    async listarProdutores(){
        return this.repo.listarProdutores()
    }

    @Put('/:id')
    async atualizarProdutor(@Param('id') id:number, @Body() dadosAtualizar:AtualizarProdutoDTO){
        const produtorAtualizado = await this.repo.atualizarProdutor(id,dadosAtualizar)

        return {
            usuario:produtorAtualizado,
            message:'Produtor Atualizado'
        }
    }   


    async deletarProdutor(@Param('id') id:number){
        const produtorRemovido = await this.repo.removerProdutor(id)

        return {
            usuario:produtorRemovido,
            message:'Produtor Atualizado'
        }
    }
}