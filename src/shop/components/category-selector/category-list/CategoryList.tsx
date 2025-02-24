"use client";

import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

import { CategoryInterface } from "@/shop/interfaces/category.interface";
import { CategoryItem } from "../category-item/CategoryItem";
import styles from "./CategoryList.module.css";

export interface CategoryItemProps {
  categories: CategoryInterface[];
  parentDescription?: string;
  goBack?: () => void;
}

export const CategoryList = ({
  categories,
  parentDescription,
  goBack,
}: CategoryItemProps) => {
  const [selectedCategory, selectCategory] = useState<CategoryInterface | null>(
    null
  );
  const [slideLeft, setSlideLeft] = useState(false);

  const showSubCategories = (category: CategoryInterface) => {
    setSlideLeft(true);
    selectCategory(category);
  };

  // The purpose of this function is to hide the categories only after the "sliding" effect has finished
  const hideSubCategories = () => {
    setSlideLeft(false);
    setTimeout(() => {
      selectCategory(null);
    }, 200);
  };

  return (
    <div className={styles.categoryList}>
      <div className={`${styles.lists} ${slideLeft && styles.slideLeft}`}>
        <div className={styles.list}>
          {parentDescription && goBack ? (
            <h3
              className={`${styles.header} ${styles.goBack}`}
              onClick={goBack}
            >
              <IoArrowBack size={20} className={styles.arrow} />
              {"    "}
              {parentDescription}
            </h3>
          ) : (
            <h3 className={styles.header}>Shop by Category</h3>
          )}

          {categories!.map((c) => (
            <CategoryItem
              category={c}
              key={c.id}
              onClick={(category) => showSubCategories(category)}
            />
          ))}
        </div>

        <div className={styles.subCategories}>
          {!!selectedCategory && (
            <CategoryList
              categories={selectedCategory.children!}
              parentDescription={selectedCategory.description}
              goBack={() => hideSubCategories()}
            />
          )}
        </div>
      </div>
    </div>
  );
};
