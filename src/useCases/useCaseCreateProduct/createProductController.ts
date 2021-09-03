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

    try{
      const { data } = await this.createProduct.execute(productDTO);
      if (data.retorno.erros){
        console.log('erro ao adicionar produto');
        return res.status(200).json({success: false, message: 'erro ao adicionar produto'});
      }
      return res.status(201).json({sucesss: true, data: data.retorno});
    } catch({ message }){
      console.log(message)
      return res.status(200).json({success: false, message});
    }

  }
}
