'use client';

import { useEffect, useState } from "react";

import { categoriesService } from "../services/categories-service";
import { CategoryResponseDto } from "../dto/category.dto";

export const useCategories = () => {
  const [categories, setCategories] = useState(
    new Array<CategoryResponseDto>()
  );

  useEffect(() => {
    categoriesService.getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return categories;
};
