"use client";

import { useEffect, useState } from "react";

import { categoriesService } from "../services/categories-service";
import { CategoryResponseDto } from "../dto/category.dto";

interface UseCategoryReturn {
  category: CategoryResponseDto;
  loading: boolean;
  error: string; 
}

export const useCategory = (
  id: number
): UseCategoryReturn => {
  const [category, setCategory] = useState({} as CategoryResponseDto);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    categoriesService
      .getCategory(id)
      .then((response) => {
        setCategory(response);
        setLoading(false);
        setError('');
      })
      .catch(err => setError(err.response.data.message));
  }, [id]);

  return { category, loading, error };
};
