import { ProductDTO } from "../../models/product.dto";
import axios, { AxiosResponse } from 'axios';
import js2xmlparser from 'js2xmlparser';

import dotenv from 'dotenv';
dotenv.config();

export class CreateProduct {
  async execute(productDTO: ProductDTO): Promise<AxiosResponse>{
    const xml = js2xmlparser.parse('pedido', productDTO);
    const blingApiKey = process.env.APIKEY_BLING;
    // `${bling_api_url}/produto/json/?apikey=${blingApiKey}&xml=${xml}`
     return await axios.post(`https://bling.com.br/Api/v2/produto/json/?apikey=${blingApiKey}&xml=${xml}`);
  }
}
