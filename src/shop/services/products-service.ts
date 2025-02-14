import { ProductsResponseDto } from "../dto/products-response.dto";
import { ProductInterface } from "../interfaces/product.interface";
import { ProductsParams } from "../dto/products-params.dto";
import { http } from "@/core";

class ProductsService {
  private readonly _basePath = '/products';
  
  async getProducts(params: ProductsParams): Promise<ProductsResponseDto> {
    return await http.post<ProductsResponseDto>(this._basePath, { params });
  }

  async findProduct(id: number): Promise<ProductInterface> {
    return await http.get<ProductInterface>(`/${this._basePath}/${id}`);
  }
}

export const productsService = new ProductsService();