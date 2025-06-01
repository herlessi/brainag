import { AtualizarProdutoDTO } from "./dto/AtualizarProdutoDTO.dto";
import { ProdutorEntity } from "./entity/ProdutorEntity.entity"
import { faker } from '@faker-js/faker';
var fakerbr = require('faker-br');

export class Helper{
    
    static criarEntidadeProduto = ()=>{
    
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
    
    static criarDTOAtualizarProdutor = ()=>{
    
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
}