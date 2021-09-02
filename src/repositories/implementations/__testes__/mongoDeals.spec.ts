import { MongoDealsRepository } from '../MongoDealsRepository';
import utils from '../../../../utils/utils';
import { DealDTO } from '../../../models/deal.dto';

describe('Repository deals', () => {
  const deal: DealDTO = {
    data: new Date(),
    valor: 50,
    id_deal: 2,
    company_id: 2034,
    status: "won",
    products_count: 2,
    title: 'negocio1',
  }

  beforeAll(utils.init);

  afterAll(utils.final);

  describe('save', () => {
    describe('dado uma entrada valida', () => {
      it('deverá criar um negócio', async () => {
        const mongoDealsRepository: MongoDealsRepository = new MongoDealsRepository();
        const negocio = await mongoDealsRepository.save(deal);
        expect(negocio).not.toBe(null);
        expect(negocio.valor).toEqual(50);
        expect(negocio.id_deal).toEqual(2);
      });
    })
  })
});
