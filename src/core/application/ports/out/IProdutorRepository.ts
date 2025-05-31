export abstract class IProdutorRepository{
    abstract salvar(dadosusuario:Object)
    abstract listarProdutores()
    abstract atualizarProdutor(id:number,dados:Object)
    abstract removerProdutor(id:number)
}
