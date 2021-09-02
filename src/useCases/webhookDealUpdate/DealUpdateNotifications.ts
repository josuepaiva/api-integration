import { IDealsRepository } from "../../repositories/IDealsRepository";
import { DealDTO } from "../../models/deal.dto";
import { DealDocument } from "../../models/deal.schema";

export class DealUpdateNotifications {
  constructor(
    private dealsRepository: IDealsRepository
  ){}

  async execute(dealDTO: DealDTO): Promise<DealDocument>{
    const created = await this.dealsRepository.save(dealDTO);
    return created;
  }
}
