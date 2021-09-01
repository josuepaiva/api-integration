import { IDealsRepository } from '../IDealsRepository';
import DealSchema, { DealInput } from '../../src/models/deal.schema';
import { Deal } from '../../src/models/deal.model';
import { DealDTO } from '../../src/models/deal.dto';

export class MongoDealsRepository implements IDealsRepository {
  agregation(): Promise<[Deal]>{
    // DealSchema.aggregate([{}])
    return
  }
  async save(deal: DealDTO): Promise<DealInput> {
    const res = await DealSchema.create<DealInput>(deal);
    return res;
  }
}
