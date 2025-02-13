'use client';

import { useEffect, useState } from "react";

import { categoriesService } from "../services/categories-service";
import { CategoryResponseDto } from "../dto/category.dto";

interface UseCategoriesReturn {
  categories: CategoryResponseDto[];
  loading: boolean;
}

export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState(
    new Array<CategoryResponseDto>()
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoriesService.getCategories().then((response) => {
      setCategories(response);
      setLoading(false);
    });
  }, []);

  return { categories, loading };
};
