import { IRequestProvider } from "../IRequestProvider";
import axios from 'axios';

export interface ConfigInterface {
  bling_url: string,
  apikey: string,
  path: string,
};

export class AxiosRequest implements IRequestProvider{
  constructor(
    private config: ConfigInterface
  ){}
  async get(url: string): Promise<void>{
    return await axios.get(url);
  }
  async post(url: string):Promise<void>{
    return await axios.post(url,)
  }
}
