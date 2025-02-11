'use client';

import { CategoryCard, useCategories } from "@/shop";
import styles from "./CategoriesGrid.module.css";

export const CategoriesGrid = () => {
  const categories = useCategories();

  return (
    <div className={styles.categoriesGrid}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};
