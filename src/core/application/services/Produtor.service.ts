import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AtualizarProdutoDTO } from "../../domain/dto/AtualizarProdutoDTO.dto";
import { ProdutorEntity } from "../../domain/entity/ProdutorEntity.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProdutorService{
    
    constructor(
        @InjectRepository(ProdutorEntity)
        private readonly produtorRepository:Repository<ProdutorEntity>
    ){}

    async criarProdutor(produtor:ProdutorEntity){
        return await this.produtorRepository.save(produtor)
    }


    async listaProdutores(){
        return await this.produtorRepository.find()
    }

    async listaProdutoresPorId(id:number){
        return await this.produtorRepository.findOneBy({id:id})
    }

    
    async updateProdutor(id:number, produtor:AtualizarProdutoDTO){
        return await this.produtorRepository.update(id,produtor)
    }


    async deleteProdutor(id:number){
        return await this.produtorRepository.delete(id)
    }

}