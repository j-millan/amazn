import { categories } from "@/shop/data/categories";
import styles from "./CategoriesGrid.module.css";
import { CategoryCard } from "../category-card/CategoryCard";

export const CategoriesGrid = () => {
  return (
    <div className={styles.categoriesGrid}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};
