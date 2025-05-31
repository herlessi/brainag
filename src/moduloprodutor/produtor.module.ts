import { Module } from "@nestjs/common";
import { ProdutorController } from "./produtor.controller";
import { ProdutorRepository } from "../adapters/drivens/produtor.reposistory";
import { IProdutorRepository } from "src/core/application/ports/out/IProdutorRepository";



@Module({
    controllers:[ProdutorController],
    providers:[
        { provide: IProdutorRepository, useClass: ProdutorRepository },
    ]
})
export class ProdutorModule{}