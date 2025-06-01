const iniciarDB = async () => {

    await sleep(5000)
    const config = require('../../knexfile.js');
    const dbinicial = require('knex')(config.inicial);

    await dbinicial.raw(`CREATE DATABASE brainag`)
    .then((resp) => {
        console.log('Banco de dados criado com sucesso!');
        dbinicial.destroy();
    }).catch((err) => {
        if(err?.message.includes('database "brainag" already exists')) {
            console.log('Banco Existente')
        }else{
            console.error('---', err);
        }
        dbinicial.destroy();
    })


    const dbdev = require('knex')(config.desenvolvimento);
    await dbdev.raw(`CREATE TABLE IF NOT EXISTS public."produtores" (
                        id serial NOT NULL,
                        documento varchar NULL,
                        nomeProdutor varchar NULL,
                        nomefazenda varchar NULL,
                        cidade varchar NULL,
                        estado varchar NULL,
                        area_fazenda_hecta int4 NULL,
                        area_agricultavel_hecta int4 NULL,
                        area_vegetacao_hecta int4 NULL,
                        safra int4 NULL,
                        cultura_plantada varchar NULL,
                        CONSTRAINT produtor_unique UNIQUE (id)
                    );
            `).then(res => res).catch(err=>{
                console.log('-------')
            })

    

}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

iniciarDB();    


