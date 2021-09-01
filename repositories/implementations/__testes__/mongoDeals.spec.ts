import { MongoDealsRepository } from '../MongoDealsRepository';
import utils from '../../../utils/utils';

describe('Repository deals', () => {
  const deal = {
    data: new Date(),
    valor: 50,
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
      });
    })
  })
});
