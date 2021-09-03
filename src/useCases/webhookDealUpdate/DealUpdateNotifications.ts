import { IDealsRepository } from "../../repositories/IDealsRepository";
import { DealDTO } from "../../models/deal.dto";
import { DealDocument } from "../../models/deal.schema";
import axios, { AxiosResponse } from 'axios';
import Parser from 'xml2js';

import dotenv from 'dotenv';
import { response } from "express";
dotenv.config();

interface BligResponseInterface {
  retorno: object
};

export class DealUpdateNotifications {
  constructor(
    private dealsRepository: IDealsRepository
  ){}

  async execute(dealDTO: DealDTO): Promise<DealDocument>{
    const path:String = 'deals';
    const blingApiKey = process.env.APIKEY_PIPEDRIVE;
    const pipeDriveLink = process.env.URL_API_PIPEDRIVE;
    const pipeApikey = process.env.APIKEY_PIPEDRIVE;

    const { data } = await axios.get(`${pipeDriveLink}${path}/${dealDTO.id_deal}/products?api_token=${pipeApikey}`);
    const builder = new Parser.Builder();
    if (data.success) {
      console.log('sucesso execute');
      const result = data.data.map((element, index) => {
        return {
          codigo: '2k3oossd',
          descricao: element.name,
          un: 'pc',
          qtde: element.quantity,
          vlr_unit: element.item_price,
        }
      });
      // console.log(result);
      const xmlObj = {
        pedido: {
          cliente: {
            nome: 'josue',
          },
          itens: {
            item: result
          }
        }
      };

      const xmldata = builder.buildObject(xmlObj);

      // console.log('xml', xmldata);
      const res = await axios.post(`${process.env.URL_API_BLING}pedido/json/?apikey=${process.env.APIKEY_BLING}&xml=${xmldata}`);
      const { erros } = res.data.retorno;
      if (!erros) {
        const created = await this.dealsRepository.save(dealDTO);
        return created;
      }
    }
    // https://jpaiva.pipedrive.com/api/v1/deals/1/products?api_token=043d2dc30c1aa78e308dffafccadfe02ce48702c
    return
  }
}
