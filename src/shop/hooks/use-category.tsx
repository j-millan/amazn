"use client";

import { useEffect, useState } from "react";

import { categoriesService } from "../services/categories-service";
import { CategoryInterface } from "../interfaces/category.interface";

interface UseCategoryReturn {
  category: CategoryInterface;
  loading: boolean;
  error: string; 
}

export const useCategory = (
  id: number
): UseCategoryReturn => {
  const [category, setCategory] = useState({} as CategoryInterface);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    categoriesService
      .findCategory(id)
      .then((response) => {
        setCategory(response);
        setLoading(false);
        setError('');
      })
      .catch(err => setError(err.response.data.message));
  }, [id]);

  return { category, loading, error };
};
