import { Response, Request } from "express";
import { ProductDTO } from "../../models/product.dto";
import { CreateProduct } from "./createProduct";

export class CreateProductController {
  constructor(
    private createProductController: CreateProduct,
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    console.log("product added");
    console.log(req.body);
    // if (req.body.current.status == 'won') {
    //   const dealDTO: ProductDTO = {
    //     data: new Date(),
    //     valor: req.body.current.value,
    //     id_deal: req.body.meta.id,
    //     products_count: req.body.current.products_count,
    //     company_id: req.body.meta.company_id,
    //     status: req.body.current.status,
    //     title: req.body.current.title
    //   };

      // const created = await this.createProductController.execute(dealDTO);
      return res.status(201).json({success: true});
    // }else {
    //   return res.status(200).send('nada adicionado');
    // }

  }
}
