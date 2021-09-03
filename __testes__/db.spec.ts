import mongoose from 'mongoose';
import Deal from '../src/models/deal.schema';

describe('Test database', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('Mongodb server is not initialized');
    }

    await mongoose.connect(process.env.MONGO_URL);

  });

  afterAll(async () => {
    mongoose.disconnect()
  });

  it('Insere um negócio no banco de dados', async () => {

    const created = await Deal.create({ date: new Date(), valor: 20, products_count: 2, id_deal: 2, company_id: 2, status: 'won', title: 'Negocio1'});
    expect(created).toEqual(
      expect.objectContaining({
        valor: 20,
      })
    );
  });
});
