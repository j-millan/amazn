"use client";

import { CategoryInterface } from "@/shop/interfaces/category.interface";
import styles from "./CategoryItem.module.css";
import { BiChevronRight } from "react-icons/bi";

export interface CategoryItemProps {
  category: CategoryInterface;
  onClick: (category: CategoryInterface) => void;
}

export const CategoryItem = ({ category, onClick }: CategoryItemProps) => {
  const { description, children } = category;

  const clicked = () => {
    if (children?.length) {
      onClick(category);
    }
  };

  return (
    <div className={styles.categoryItem} onClick={clicked}>
      <span>{description}</span>
      {children?.length && <BiChevronRight size={26} />}
    </div>
  );
};
