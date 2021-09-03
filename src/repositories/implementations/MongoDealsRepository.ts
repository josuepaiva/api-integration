import { IDealsRepository } from '../IDealsRepository';
import Deal, { DealDocument } from '../../models/deal.schema';
import { DealDTO } from '../../models/deal.dto';

export class MongoDealsRepository implements IDealsRepository {
  async agregation(): Promise<any>{
    const docs = await Deal.aggregate([
      {
        $group: {
          _id: '$date',
          total: { $sum: '$valor'},
        }
      }
    ]);

    return docs;
  }
  async save(deal: DealDTO): Promise<DealDocument> {
    const res = await Deal.create(deal);
    return res;
  }
}
