import { AxiosRequest } from "../implementations/axiosRequest";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface DadosPipeDriveDTO {
  success: boolean,
  data: [Object],
};

describe("pipedrive service", () => {
  describe("get url api pipedrive", () => {
    it("faz uma requisição para uma rota da api pipedrive", async() => {
      expect(true).toEqual(true);
      // const axiosRequest: AxiosRequest = new AxiosRequest();
      // axiosRequest.get('')
    });
  })
});
