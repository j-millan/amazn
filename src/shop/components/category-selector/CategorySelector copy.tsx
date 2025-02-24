import { categoriesService } from "@/shop/services/categories-service";
import { CategoryItem } from "./category-item/CategoryItem";
import styles from "./CategorySelector.module.css";

export const CategorySelector = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <div className={styles.categorySelector}>
      <h4 className={styles.header}>Shop by category</h4>
      {categories!.map(c => (
        <CategoryItem category={c} key={c.id} />
      ))}
    </div>
  );
};
