import { Response } from "express";
import { IDealsRepository } from "../../repositories/IDealsRepository";

export class UserCaseDealsConsolidated {
  constructor(
    private dealsRepository: IDealsRepository
  ){}

  async handle(_, res: Response): Promise<Response>{
    try{
      const dealsConsolidas = await this.dealsRepository.agregation();
      return res.json({success: true, data: dealsConsolidas});
    } catch({ message }){
      return res.status(500).json({success: false, message});
    }
  }
}
