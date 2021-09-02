import { Response, Request } from "express";
import { ProductDTO } from "../../models/product.dto";
import { CreateProduct } from "./createProduct";

export class CreateProductController {
  constructor(
    private createProduct: CreateProduct,
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    console.log("product added");
    const productDTO: ProductDTO = {
      descricao: req.body.current.name,
      codigo: req.body.current.code,
      preco: req.body.current.prices[0].price,
    };

    console.log('entrada ', productDTO);

    try{
      const { data } = await this.createProduct.execute(productDTO);
      console.log(data.retorno.erros);
      return res.status(201).json(data.retorno);
    } catch({ message }){
      console.log(message)
      return res.status(200).json({success: false, message});
    }

  }
}
