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
        },
      },
      {
        $project: {
          _id: 0,
          date: {
            $dateToString: {
              format: '%d-%m-%Y',
              date: '$_id'
            }
          },
          total: 1
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
