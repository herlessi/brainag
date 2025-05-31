export class ProdutorEntity{
        id:number;
        documento:string;                // CPF ou CNPJ
        nomeProdutor:string                     // Nome do produtor
        nomefazenda:string              // Nome da fazenda (propriedade)
        cidade:string;                  // Cidade
        estado:string;                  // Estado
        area_fazenda_hecta:number;      // Área total da fazenda (em hectares)
        area_agricultavel_hecta:number; // Área agricultável (em hectares)
        area_vegetacao_hecta:number;    // Área de vegetação (em hectares)
        safra:number;                   // Safras (ex: Safra 2021, Safra 2022)
        cultura_plantada:string;        // Culturas plantadas (ex.: Soja na Safra 2021, Milho na Safra 2021, Café na Safra 2022)
} 