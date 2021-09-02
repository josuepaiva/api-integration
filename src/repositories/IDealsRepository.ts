import { DealDocument } from '../models/deal.schema';
import { DealDTO } from '../models/deal.dto';

export interface IDealsRepository {
  agregation(): Promise<[DealDocument]>;
  save(deal: DealDTO): Promise<DealDocument>;
}
