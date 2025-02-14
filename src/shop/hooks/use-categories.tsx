'use client';

import { useEffect, useState } from "react";

import { categoriesService } from "../services/categories-service";
import { CategoryInterface } from "../interfaces/category.interface";

interface UseCategoriesReturn {
  categories: CategoryInterface[];
  loading: boolean;
}

export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState(
    new Array<CategoryInterface>()
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
