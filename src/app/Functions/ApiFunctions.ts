import { ApiController } from "../services/EndPoinsts/ApiController";
import { Product } from "../services/Interfaces/Product";

export const getProducts = async (): Promise<Product[]> => {
  return await ApiController.getProducts();
};

export const getProduct = async (
  id_product: string | string[]
): Promise<Product> => {
  return await ApiController.getSingleProduct(id_product);
};

export const deleteProduct = async (
  id: string | string[]
): Promise<Product> => {
    const r = await ApiController.deleteProduct(id);
    return r;
};
export const modifyProduct = async (
  id: string | string[],
  newProduct: Product
): Promise<Product> => {
    const r = await ApiController.modifyProduct(id, newProduct);
    console.log(r);
    return r;
};

export const createProduct = async (newProduct: Product): Promise<Product> => {
    const r =await ApiController.createProduct(newProduct);
    return r;
};
