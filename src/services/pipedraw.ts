import { IRequestProvider } from "./IRequestProvider";
import { AxiosRequest } from "./implementations/axiosRequest";

export class PipeDrawService {
    private request: IRequestProvider;
    constructor(){
        this.request = new AxiosRequest();
    }
};