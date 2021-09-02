import { IRequestProvider } from './IRequestProvider';
import { DealDTO } from '../models/deal.dto';

export class BlingProvider {
  constructor(
    private requestProvider: IRequestProvider,
  ){}

  async execute(dealDTO: DealDTO): Promise<void>{
    // this.requestProvider.get(this.config.)
    // const created = await this.dealsRepository.save(dealDTO);
    // return created;
  }
}
