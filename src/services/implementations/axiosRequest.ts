import { IRequestProvider } from "../IRequestProvider";
import axios from 'axios';

export class AxiosRequest implements IRequestProvider{
    async get(url: string): Promise<void>{
        return await axios.get(url);
    }
}
