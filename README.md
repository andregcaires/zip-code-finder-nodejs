# Zip Code Finder

Implementação do projeto [Zip Code Finder](https://github.com/andregcaires/zip-code-finder) com uso de Node.js e Typescript

## Este projeto se encontra em fase MVP, portanto, não possui ainda todas as funcionalidades do projeto original

## O projeto foi desenvolvido com base na metodologia Domain Driven Design, e dividido em três módulos: 
* domain: classes de domínio, entidades e serviços de domínio
* application: classes de aplicação e serviços de aplicação
* webapp: classes de recursos REST

## Como funciona?
O projeto conta com os seguintes endpoints para acesso:

| Verbo HTTP  | Endpoint                      | Retorno                                                                        |
|-------------|-------------------------------|--------------------------------------------------------------------------------|
| GET         | /zipcode/{CEP}/viacep         | retorna o endereço correspondente ao CEP através do web service ViaCep        |
| GET         | /health                       | retorna informações da saúde da aplicação                                      |
| GET         | /                             | exibe documentação da aplicação                                                |

## O que foi utilizado: 

Todo o projeto foi desenvolvido para a plataforma [Node.js](https://nodejs.org/en/), fazendo uso de [Typescript](https://www.typescriptlang.org/). Para a consulta à API do serviço [ViaCep](https://viacep.com.br/), foi utilizado o [Axios](https://github.com/axios/axios). Para testes, foi utilizado o [Jest](https://jestjs.io/) em conjunto com o [TS-Jest](https://kulshekhar.github.io/ts-jest/) para uso com Typescript

A camada web foi desenvolvida com uso do framework [Nest](https://nestjs.com/), e suas bibliotecas do [OpenAPI](https://docs.nestjs.com/openapi/introduction) e do [Terminus](https://docs.nestjs.com/recipes/terminus) foram utilizadas para os serviços de documentação e health check, respectivamente
