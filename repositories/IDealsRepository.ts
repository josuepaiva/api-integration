import { Deal } from '../src/models/deal.model';
import { DealInput } from '../../src/models/deal.schema';
import { DealDTO } from '../src/models/deal.dto';

export interface IDealsRepository {
  agregation(): Promise<[Deal]>;
  save(deal: DealDTO): Promise<DealInput>;
}
