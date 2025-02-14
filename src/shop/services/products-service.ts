import { Axios } from "@/core/config";

import { ProductsResponseDto } from "../dto/products-response.dto";
import { ProductInterface } from "../interfaces/product.interface";
import { ProductsParams } from "../dto/products-params.dto";

class ProductsService {
  private readonly _basePath = '/products';
  
  async getProducts(params: ProductsParams): Promise<ProductsResponseDto> {
    const response = await Axios.get<ProductsResponseDto>(this._basePath, { params });
    return response.data;
  }

  async findProduct(id: number): Promise<ProductInterface> {
    const response = await Axios.get<ProductInterface>(`/${this._basePath}/${id}`);
    return response.data;
  }
}

export const productsService = new ProductsService();