import { IsOptional } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'produtores'})
export class ProdutorEntity{

        @PrimaryGeneratedColumn()
        @IsOptional()
        id:number;

        @Column({name:'documento',length:11,nullable:false})
        documento:string;               

        @Column({name:'nomeprodutor',length:100,nullable:false})
        nomeProdutor:string             

        @Column({name:'nomefazenda',length:100,nullable:false})
        nomefazenda:string              

        @Column({name:'cidade',length:100,nullable:false})
        cidade:string;                  

        @Column({name:'estado',length:100,nullable:false})
        estado:string;                  

        @Column({name:'area_fazenda_hecta',nullable:false}) 
        area_fazenda_hecta:number;      

        @Column({name:'area_agricultavel_hecta',nullable:false}) 
        area_agricultavel_hecta:number; 

        @Column({name:'area_vegetacao_hecta',nullable:false}) 
        area_vegetacao_hecta:number;    

        @Column({name:'safra',nullable:false}) 
        safra:number;                   

        @Column({name:'cultura_plantada',length:100,nullable:false})
        cultura_plantada:string;        

        @CreateDateColumn({name:'created_at'})
        created_at:string;

        @CreateDateColumn({name:'udpated_at'})
        udpated_at:string;

        @CreateDateColumn({name:'deleted_at'})
        deleted_at:string;
} 