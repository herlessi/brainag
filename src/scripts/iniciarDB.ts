const iniciarDB = async () => {

    const config = require('../../knexfile.js');
    console.log("VAI CONECTAR")
    const dbinicial = require('knex')(config.inicial);

    console.log("CONECTOU")

    await dbinicial.raw(`CREATE DATABASE brainag`)
    .then((resp) => {
        console.log(resp)
        console.log('Banco de dados criado com sucesso!');
        dbinicial.destroy();
    }).catch((err) => {
        console.log(err.message);
        if(err?.message.includes('database "brainag" already exists')) {
            console.log('Banco Existente')
        }else{
            console.error('Erro ao criar o banco de dados:', err);
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
            `)

    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public."users" (
    //                     id serial NOT NULL,
    //                     "name" varchar NULL,
    //                     email varchar NULL,
    //                     "password" varchar NULL,
    //                     dt_created timestamp DEFAULT now() NULL,
    //                     fl_status boolean DEFAULT true NULL,
    //                     CONSTRAINT user_unique UNIQUE (id)
    //                 );

    //         `)

    //  await dbdev.raw(`INSERT INTO users(name,email,password)
    //                     SELECT 'admin','admin@email.com','123456' WHERE NOT EXISTS (SELECT id FROM users WHERE name = 'admin')
    //                 `)


    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public."order" (
    //                     id serial NOT NULL,
    //                     customer_id int4 NOT NULL,
    //                     dt_created timestamptz DEFAULT now() NULL,
    //                     fl_status int4 not NULL,
    //                     place_number varchar NULL,
    //                     CONSTRAINT order_unique UNIQUE (id)
    //                 );
    //                 CREATE INDEX IF NOT EXISTS order_customer_id_idx ON public."order" (customer_id);
    //                 CREATE INDEX IF NOT EXISTS order_fl_status_idx ON public."order" (fl_status);

    //         `) 


    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public.category (
    //                         id serial NOT NULL,
    //                         "name" varchar NULL,
    //                         dt_created timestamptz DEFAULT now() NULL,
    //                         fl_status boolean DEFAULT true NULL,
    //                         CONSTRAINT category_unique UNIQUE (id)
    //                     );


    //         `)


    // await dbdev.raw(`INSERT INTO category(name)
    //                 SELECT 'Lanche' WHERE NOT EXISTS (SELECT id FROM category WHERE name = 'Lanche')
    //                 union all 
    //                 SELECT 'Acompanhamento' WHERE NOT EXISTS (SELECT id FROM category WHERE name = 'Acompanhamento')
    //                 union all 
    //                 SELECT 'Bebida' WHERE NOT EXISTS (SELECT id FROM category WHERE name = 'Bebida')
    //                 union all 
    //                 SELECT 'Sobremesa' WHERE NOT EXISTS (SELECT id FROM category WHERE name = 'Sobremesa');
    //                 `)


    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public.product (
    //                         id serial NOT NULL,
    //                         category_id int4 NOT NULL,
    //                         "name" varchar NULL, 
    //                         price decimal NULL,
    //                         dt_created timestamp DEFAULT now() NULL,
    //                         fl_status boolean DEFAULT true NULL,
    //                         CONSTRAINT product_unique UNIQUE (id),
    //                         CONSTRAINT product_category_fk FOREIGN KEY (category_id) REFERENCES public.category(id)
    //                     );
    //         `)
  
    // await dbdev.raw(`INSERT INTO product(category_id,name,price)
    //                 SELECT 1,'Hamburguer',1.1 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Hamburguer' and category_id = 1)
    //                 union all 
    //                 SELECT 1,'Pastel',1.2 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Pastel' and category_id = 1)
    //                 union all  
    //                 SELECT 2,'Batata Frita',2.1 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Batata Frita' and category_id = 2)
    //                 union all 
    //                 SELECT 2,'Onion Rings',2.2 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Onion Rings' and category_id = 2)
    //                 union all 
    //                 SELECT 3,'Coca Cola',3.1 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Coca Cola' and category_id = 3)
    //                 union all 
    //                 SELECT 3,'Guaraná',3.2 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Guaraná' and category_id = 3)
    //                 union all 
    //                 SELECT 4,'Sorvete',4.1 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Sorvete' and category_id = 4)
    //                 union all 
    //                 SELECT 4,'Pudim',4.2 WHERE NOT EXISTS (SELECT id FROM product WHERE name = 'Pudim' and category_id = 4)
    //                 `)            
 

    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public.order_product (
    //                         order_id int4 NOT NULL,
    //                         product_id int4 NOT NULL,
    //                         quantity int4 NOT NULL,
    //                         fl_status boolean DEFAULT true NULL,
    //                         dt_created timestamptz DEFAULT now() NULL
    //                     );
    //         `)



    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public.order_payments (
    //                         id serial NOT NULL,
    //                         order_id int4 NOT NULL,
    //                         fl_status int4 NULL,
    //                         payment_data text NULL,
    //                         CONSTRAINT order_payments_unique UNIQUE (id),
    //                         CONSTRAINT order_payments_order_fk FOREIGN KEY (order_id) REFERENCES public."order"(id)
    //                     );
    //         `)


    // await dbdev.raw(`CREATE TABLE IF NOT EXISTS public.order_status (
    //                     id serial NOT NULL,
    //                     name varchar NULL,
    //                     CONSTRAINT order_status_unique UNIQUE (id)
    //                 );
    //         `)

    // await dbdev.raw(`INSERT INTO order_status(id,name)
    //                 SELECT 1,'Registrado' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Registrado' and id = 1)
    //                 union all 
    //                 SELECT 2,'Pago' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Pago' and id =2)
    //                 union all  
    //                 SELECT 3,'Recebido' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Recebido' and id = 3)
    //                 union all 
    //                 SELECT 4,'Em Preparação' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Em Preparação' and id = 4)
    //                 union all 
    //                 SELECT 5,'Pronto' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Pronto' and id = 5)
    //                 union all 
    //                 SELECT 6,'Finalizado' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Finalizado' and id = 6)
    //                 union all 
    //                 SELECT 7,'Cancelado' WHERE NOT EXISTS (SELECT id FROM order_status WHERE name = 'Cancelado' and id = 7)
    //                 `)      


}

setTimeout(() => {
    iniciarDB();    
}, 10000);
