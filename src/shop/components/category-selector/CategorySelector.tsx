import { GrClose } from "react-icons/gr";

import { categoriesService } from "@/shop/services/categories-service";
import { CategoryList } from "./category-list/CategoryList";
import styles from "./CategorySelector.module.css";

export const CategorySelector = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <div className={styles.categorySelector}>
      <div className={styles.list}>
        <CategoryList categories={categories} />
      </div>
      <GrClose size={24} className={styles.closeButton} />
    </div>
  );
};
