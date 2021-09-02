import { CreateProduct } from './createProduct';
import { CreateProductController } from './createProductController';

const createProduct = new CreateProduct();
const createProductController = new CreateProductController(createProduct);

export { createProductController };
