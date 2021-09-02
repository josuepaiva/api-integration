import { ProductDTO } from "../../models/product.dto";
import axios, { AxiosResponse } from 'axios';
import Parser from 'xml2js';

import dotenv from 'dotenv';
dotenv.config();

export class CreateProduct {
  async execute(productDTO: ProductDTO): Promise<AxiosResponse>{
    const builder = new Parser.Builder();
    const xmlObj = {
      codigo: productDTO.codigo,
      descricao: productDTO.descricao,
      preco: productDTO.preco
    };

    const xmldata = builder.buildObject(xmlObj);
    const blingApiKey = process.env.APIKEY_BLING;
    const xml = encodeURI(xmldata)
    console.log('xml', xml);
    // `${bling_api_url}/produto/json/?apikey=${blingApiKey}&xml=${xml}`
     return await axios.post(`https://bling.com.br/Api/v2/produto/json/?apikey=${blingApiKey}&xml=${xml}`);
  }
}
