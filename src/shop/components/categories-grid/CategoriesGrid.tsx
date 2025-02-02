'use client';

import { useEffect, useState } from "react";

import { CategoryCard, CategoryResponseDto, categoriesService } from "@/shop";
import styles from "./CategoriesGrid.module.css";

export const CategoriesGrid = () => {
  const [categories, setCategories] = useState(
    new Array<CategoryResponseDto>()
  );

  useEffect(() => {
    categoriesService.getCategories().then((response) => {
      setCategories(response);
    })
  }, []);

  return (
    <div className={styles.categoriesGrid}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};
