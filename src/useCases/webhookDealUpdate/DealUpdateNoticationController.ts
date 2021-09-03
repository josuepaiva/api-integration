import { Response, Request } from "express";
import { DealUpdateNotifications } from "./DealUpdateNotifications";
import { DealDTO } from "../../models/deal.dto";

export class DealUpdateNotificationsController {
  constructor(
    private dealUpdateNotification: DealUpdateNotifications,
  ){}

  async handle(req: Request, res: Response): Promise<Response>{

    if (req.body.current.status == 'won') {
      const dealDTO: DealDTO = {
        date: new Date(),
        valor: req.body.current.value,
        id_deal: req.body.meta.id,
        products_count: req.body.current.products_count,
        company_id: req.body.meta.company_id,
        status: req.body.current.status,
        title: req.body.current.title
      };

      const created = await this.dealUpdateNotification.execute(dealDTO);
      if (created)
        return res.status(201).json({ success: true, date: created});
      return res.status(500).json({ success: false, date: null});
    }else {
      return res.status(202).json({ success: true, date: null});
    }

  }
}
