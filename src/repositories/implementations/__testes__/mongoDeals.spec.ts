import { MongoDealsRepository } from '../MongoDealsRepository';
import utils from '../../../../utils/utils';
import { DealDTO } from '../../../models/deal.dto';
import  Deal from '../../../models/deal.schema';

describe('Repository deals', () => {
  const deal: DealDTO = {
    date: new Date(),
    valor: 50,
    id_deal: 2,
    company_id: 2034,
    status: "won",
    products_count: 2,
    title: 'negocio1',
  }

  beforeAll(utils.init);

  afterAll(utils.final);

  beforeEach(async () => {
    await Deal.collection.deleteMany({});
  });

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

  describe('agregation', () => {
    it('deve retornar a soma total de pedidos agrupados por dia', async () => {
      const mongoDealsRepository: MongoDealsRepository = new MongoDealsRepository();
      const negocios = [{
        date: new Date(2021,9,3),
        valor: 50,
        id_deal: 2,
        company_id: 2034,
        status: "won",
        products_count: 2,
        title: 'negocio1',
      },
      {
        date: new Date(2021,9,3),
        valor: 20,
        id_deal: 2,
        company_id: 2034,
        status: "won",
        products_count: 1,
        title: 'negocio2',
      },
      {
        date: new Date(2021,9,2),
        valor: 20,
        id_deal: 2,
        company_id: 2034,
        status: "won",
        products_count: 2,
        title: 'negocio3',
      }
      ];
      await Deal.insertMany(negocios);

      const result = await mongoDealsRepository.agregation();
      console.log(result);
      expect(result).not.toBe(null);
      expect(result).not.toBe(null);
      expect(result).toHaveLength(2);
    })
  })
});
