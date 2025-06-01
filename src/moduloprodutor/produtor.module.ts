import { Module } from "@nestjs/common";
import { ProdutorController } from "./produtor.controller";
import { ProdutorRepository } from "../adapters/drivens/produtor.reposistory";
import { IProdutorRepository } from "../core/application/ports/out/IProdutorRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutorEntity } from "../core/domain/entity/ProdutorEntity.entity";
import { ProdutorService } from "../core/application/services/Produtor.service";



@Module({
    imports:[TypeOrmModule.forFeature([ProdutorEntity])],
    controllers:[ProdutorController],
    providers:[
        ProdutorService,
        { provide: IProdutorRepository, useClass: ProdutorRepository }, 
    ]
})
export class ProdutorModule{}