# Integração Pipedrive/Bling

Faz uma integração do Pipedrive com o Blig tornando possível fechar negócios no Pipedrive e passando esses pedidos ao Bling.

## Sincronização de dados Pipedrive/Bling

A sincronização dos dados foi implementada de forma reativa com uso de webhooks e logo por conta disso é necessário criar dois webhooks na conta teste do Pipedrive. Abaixo é mostrado o formato
do endpoint utilizado

http://URL_API/notificationdeal/updated -> Notifica quando uma deal é atualizada
http://URL_API/notificationproduct/added -> Notifica quando um produto é adicionado ao Pipedrive

Sugestão:
Quando subir a API usar a ferramenta de túnel ng-rock apotando para a porta que a API está rodando. Desta forma a API ficará exposta na internet e poderar se cadastrada como end point
dos webhooks do Pipedrive

#### Variáveis do .env
* PORT_SERVER
* DB_URL
* APIKEY_PIPEDRIVE
* APIKEY_BLING
* URL_API_BLING
* URL_API_PIPEDRIVE

## Instalação com docker no Linux

1. Instalar o docker `docker-compose`.
2. Clone este repositório:

  ```shell
  git clone https://github.com/josuepaiva/api-integration
  cd /api-integration
  ```

3. Crie um arquivo chamado .env com o conteúdo `.env.example` e preencha os campos:

  ```shell
  cp .env.example .env
  vi .env
  ```

4. Crie e levante o container usando o `docker-compose`:

  ```
  docker-compose up -d
  ```

5. Para acessar a API `http://localhost:${PORT_SERVER}`.

## Instalação com npm

### Pré-requisitos
1. É necessário possuir o mongodb instalado
2. Node 14

1. Clone este repositório:
  ```shell
  git clone https://github.com/josuepaiva/api-integration
  cd /api-integration
    ```
2. Crie um arquivo chamado .env com o conteúdo `.env.example` e preencha os campos:
  ```shell
  cp .env.example .env
  vi .env
  ```
3. Instale as dependencias do projeto:
  ```
  yarn
  ```
4. Rodar o serviço
  ```
  yarn start
  ```
5. Testes
  ```
  yarn test
  ```
6. Para acessar o serviço `http://localhost:${PORT_SERVER}`.

## API Rotas ##

### Deals ###
|   Açao                                    |  Método   | URL
| ------------------------------------------|-----------|-------------------------------------------
|   Lista negocios consolidadas             |   `GET`   | /deals

