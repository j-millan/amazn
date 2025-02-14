import { ProductInterface } from "../interfaces/product.interface";

export interface ProductsResponseDto {
  results: ProductInterface[];
  totalResults: number;
  pageSize: number;
  currentPage: number;
  previousPage: number;
  nextPage: number;
  totalPages: number;
}
  