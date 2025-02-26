"use client";

import { useContext } from "react";
import { GrClose } from "react-icons/gr";

import { CategorySelectorContext } from "../../providers/category-selector-provider/CategorySelectorProvider";
import { CategoryList } from "./category-list/CategoryList";
import styles from "./CategorySelector.module.css";

interface CategrySelectorProps {
  className?: string;
}

export const CategorySelector = ({ className }: CategrySelectorProps) => {
  const { toggle, categories } = useContext(CategorySelectorContext);

  return (
    <div className={`${styles.categorySelector} ${className}`}>
      <div className={styles.list}>
        <CategoryList categories={categories} />
      </div>
      <GrClose
        size={24}
        className={styles.closeButton}
        onClick={() => toggle(false)}
      />
    </div>
  );
};
