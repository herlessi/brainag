import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CriarProdutorDTO {
    
    @IsString({message:'O campo Documento precisa ser um texto!'})
    @IsNotEmpty({message:'Documento é um campo obrigatorio: CPF ou CNPJ!'})
    documento:string;                // CPF ou CNPJ

    @IsString({message:'O campo Nome do Produtor precisa ser um texto'})
    @IsNotEmpty({message:'Nome do Produtor é um campo obrigatorio!'})
    nomeProdutor:string                     // Nome do produtor

    @IsString({message:'O campo Nome da Fazenda precisa ser um texto'})
    @IsNotEmpty({message:'Nome da Fazenda é um campo obrigatorio!'})
    nomefazenda:string              // Nome da fazenda (propriedade)

    @IsString({message:'O campo Cidade precisa ser um texto'})
    @IsNotEmpty({message:'Cidade é um campo obrigatorio!'})
    cidade:string;                  // Cidade

    @IsString({message:'O campo Estado precisa ser um texto'})
    @IsNotEmpty({message:'Estado é um campo obrigatorio!'})
    estado:string;                  // Estado

    @IsNumber(undefined,{message:'O campo Area da Fazenda em Hectares precisa ser um numero'})
    @Min(1,{message:'O campo area da Fazenda tem que ser maior ou igual a 1'})
    @IsNotEmpty({message:'Campo Area da Fazenda em Hectares é um campo obrigatorio'})
    area_fazenda_hecta:number;      // Área total da fazenda (em hectares)

    @IsNumber(undefined,{message:'O campo Area Agricultavel em Hectares precisa ser um numero'})
    @Min(1,{message:'O campo area da Agricultavel tem que ser maior ou igual a 1'})
    @IsNotEmpty({message:'Campo Area Agricultavel em Hectares é um campo obrigatorio'})
    area_agricultavel_hecta:number; // Área agricultável (em hectares)

    @IsNumber(undefined,{message:'O campo Area de Vegetação em Hectares precisa ser um numero'})
    @Min(1,{message:'O campo area da Vegetação tem que ser maior ou igual a 1'})
    @IsNotEmpty({message:'Campo Area de Vegetação em Hectares é um campo obrigatorio'})
    area_vegetacao_hecta:number;    // Área de vegetação (em hectares)

    @IsNumber(undefined,{message:'O Ano da Safra precisa ser um numero no formato YYYY'})
    @Min(4,{message:'O ano da Safra precisa ter 4 digitos'})
    @IsNotEmpty({message:'O Ano da Safra é um campo obrigatorio'})
    safra:number;                   // Safras (ex: Safra 2021, Safra 2022)

    @IsString({message:'A cultura plantada na safra precisa ser um texto'})
    @IsNotEmpty({message:'A cultura plantada na safra é um campo obrigatorio'})
    cultura_plantada:string;        // Culturas plantadas (ex.: Soja na Safra 2021, Milho na Safra 2021, Café na Safra 2022)
}