"use client";

import { CategoryCard, useCategories } from "@/shop";
import { Spinner, SpinnerSizeEnum } from "@/shared";
import styles from "./CategoriesGrid.module.css";

export const CategoriesGrid = () => {
  const { categories, loading } = useCategories();

  return (
    <div className={styles.categoriesGrid}>
      {loading ? (
        <Spinner size={SpinnerSizeEnum.LG} />
      ) : (
        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      )}
    </div>
  );
};
