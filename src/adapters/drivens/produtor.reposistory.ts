import { Injectable } from "@nestjs/common"
import { rejects } from "assert"
import { IProdutorRepository } from "src/core/application/ports/out/IProdutorRepository"
import { ProdutorEntity } from "src/core/domain/entity/ProdutorEntity.entity"

@Injectable()
export class ProdutorRepository implements IProdutorRepository{
    private produtores = new Array<ProdutorEntity>

    async salvar(produtor:ProdutorEntity){
        this.produtores.push(produtor)
    }


    async listarProdutores(){
        return this.produtores
    }

    async atualizarProdutor(id:number,dados:Partial<ProdutorEntity>){
        return new Promise((resolve, reject) =>{
            resolve("Atualizado")
            reject('nada')
        })
    }

    async removerProdutor(id:number){
        return new Promise((resolve, reject) =>{
            resolve("removido")
            reject('nada')
        })
    }
}