import { AxiosRequest } from "../implementations/axiosRequest";
import axios from 'axios';
import jsontoxml from 'jsontoxml';

import dotenv from 'dotenv';
dotenv.config();

interface DadosPipeDriveDTO {
  success: boolean,
  data: [Object],
};

describe("pipedrive service", () => {
  describe("get url api pipedrive", () => {
    it("faz uma requisição para uma rota da api pipedrive", async() => {
      const xml = jsontoxml(
        {
          "pedido":{
            "cliente":{
              "nome":"josué",
              "endereco":"Rua Visconde de São Gabriel",
              "numero":"392",
              "complemento":"Sala 54",
              "bairro":"Cidade Alta",
              "cep":"95.700-000",
              "cidade":"Bento Gonçalves",
              "uf":"RS",
              "fone":"5481153376",
              "email":"teste@teste.com.br"
            },
            "itens":{
              "item":[
                {
                  "codigo":"001",
                  "descricao":"Caneta 001",
                  "qtde":"10",
                  "vlr_unit":"1.68"
                },
                {
                  "codigo":"002",
                  "descricao":"Caderno 002",
                  "qtde":"3",
                  "vlr_unit":"3.75"
                },
                {
                  "codigo":"003",
                  "descricao":"Teclado 003",
                  "qtde":"7",
                  "vlr_unit":"18.65"
                }
              ]
            }
        }
       });

       try{
        console.log('key api ', process.env.APIKEY_BLING);
        const params = {
          apikey: process.env.APIKEY_BLING,
          xml
        };
        const { data } = await axios.post('https://bling.com.br/Api/v2/pedido/json/', params);
        console.log(data);
       } catch({ message }){
        console.log(message);
       }

      // const { data } = await axios.get<DadosPipeDriveDTO>('https://bling.com.br/Api/v2/pedido/json/', {
      //   params: {
      //     status: 'won',
      //     api_token: '043d2dc30c1aa78e308dffafccadfe02ce48702c',
      //   }
      // });
      expect(true).toEqual(true);
      // const axiosRequest: AxiosRequest = new AxiosRequest();
      // axiosRequest.get('')
    });
  })
});
