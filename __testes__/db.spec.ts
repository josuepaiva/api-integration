import mongoose from 'mongoose';
import DealSchema from '../src/models/deal.schema';

describe('Test database', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('Mongodb server is not initialized');
    }

    await mongoose.connect(process.env.MONGO_URL);

  });

  afterAll(async () => {
    DealSchema.deleteMany();
    mongoose.disconnect()
  });

  it('Insere um negócio no banco de dados', async () => {

    const created = await DealSchema.create({ data: new Date(), valor: 20 });
    expect(created).toEqual(
      expect.objectContaining({
        valor: 20,
      })
    );
  });
});
