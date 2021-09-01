import { AxiosRequest } from "../implementations/axiosRequest";
import axios from 'axios';

interface DadosPipeDriveDTO {
  success: boolean,
  data: [Object],
};

describe("pipedrive service", () => {
  describe("get url api pipedrive", () => {
    it("faz uma requisição para uma rota da api pipedrive", async() => {
      const { data } = await axios.get<DadosPipeDriveDTO>('https://jpaiva.pipedrive.com/api/v1/deals', {
        params: {
          status: 'won',
          api_token: '043d2dc30c1aa78e308dffafccadfe02ce48702c',
        }
      });
      expect(data.success).toEqual(true);
      // const axiosRequest: AxiosRequest = new AxiosRequest();
      // axiosRequest.get('')
    });
  })
});
