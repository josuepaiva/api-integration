import { IDealsRepository } from '../IDealsRepository';
import Deal, { DealDocument } from '../../models/deal.schema';
import { DealDTO } from '../../models/deal.dto';

export class MongoDealsRepository implements IDealsRepository {
  agregation(): Promise<[DealDocument]>{
    // DealSchema.aggregate([{}])
    return
  }
  async save(deal: DealDTO): Promise<DealDocument> {
    const res = await Deal.create(deal);
    return res;
  }
}
