# BRAIN AG

## Sobre o Projeto

Proposta é criar uma aplicação para gerenciar o cadastro de produtores rurais, com os seguintes dados:

- CPF ou CNPJ
- Nome do produtor
- Nome da fazenda (propriedade)
- Cidade
- Estado
- Área total da fazenda (em hectares)
- Área agricultável (em hectares)
- Área de vegetação (em hectares)
- Safras (ex: Safra 2021, Safra 2022)
- Culturas plantadas (ex.: Soja na Safra 2021, Milho na Safra 2021, Café na Safra 2022)


## Requisitos do Negocio para Backend
- Desenvolva uma API REST.
- Utilize Docker para distribuir a aplicação.
- Utilize Postgres como banco de dados.
- Crie os endpoints necessários para atender os requisitos de negócio.
- Desenvolva testes unitários e integrados.
- Estruture dados "mockados" para testes.
- Inclua logs para garantir a observabilidade do sistema, facilitando o monitoramento e a identificação de possíveis problemas.
- Utilize um framework de ORM.


## Estrutura

- Swagger: Documentação do projeto
- Códigos-fonte em Arquitetura Hexagonal
- Banco de dados Postgres
- Foi criado um script de iniciação do banco de dados que roda automaticamente 20 segundo apos o deploy do backend.
- Docker
- A aplicação demora cerca de 1 minuto para ficar completamente online devido ao banco e criação automatica do banco


## Tecnologias Utilizadas
- Typescript
- Node.js
- NestJS
- Postgres
- Knex
- TypeORM
- Docker
- Swagger


## Como Executar
1. Todas os componentes do projetos são iniciados usando docker compose ( que pode levar 1 minuto)
2. para iniciar:  docker compose up -d
3. Como docker instalado na sua maquina, execute: "docker compose up -d" e todos os componentes serão executados e ficarão prontos para ser usado
4. A api node será responsavel por criar o base de dados brainag, essa execução acontecerá 20 segundo apos a api subir.

## TESTES
1. Os testes estão dentro do moduloprodutor
2. Para executar os testes basta executar npm run test


## No knexfile 
1. atualmente está como host "banco" mas pode ser alterado para localhost 

## Serviços:
- Swagger: http://localhost:8081/swagger/
- Backend: http://localhost:3000
- Banco: brainag (será criado automaticamente pela api 10/20 segundos apos a inicialização do banco)


## Autores
- Nome: Herlessi Nogueira
- Email: herlessi@gmail.com
- Discord: herlessi

## Licença
Este projeto é apenas para fins acadêmicos.
