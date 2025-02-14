'use client';

import { useEffect, useState } from "react";
import { productsService } from "../services/products-service";
import { ProductsResponseDto } from "../dto/products-response.dto";
import { ProductsParams } from "../dto/products-params.dto";


interface UseProductsReturn extends ProductsResponseDto {
  loading: boolean;
}

export const useProducts = (params: ProductsParams): UseProductsReturn => {
  const [response, setResponse] = useState<ProductsResponseDto>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsService.getProducts(params).then((res) => {
      setResponse(res);
      setLoading(false);
    });
  }, [params]);

  return { ...(response as ProductsResponseDto), loading };
};
