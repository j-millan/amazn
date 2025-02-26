"use client";

import { useContext } from "react";
import { motion } from "motion/react";
import { GrClose } from "react-icons/gr";

import { CategorySelectorContext } from "@/shop/providers/category-selector-provider/CategorySelectorProvider";
import { CategoryList } from "./category-list/CategoryList";
import styles from "./CategorySelector.module.css";

export const  CategorySelector = () => {
  const { toggle, categories } = useContext(CategorySelectorContext);
  const transition = { duration: 0.2, type: "tween" };

  return (
    <motion.div
      className={styles.categorySelector}
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition }}
      exit={{ x: "-100%", transition }}
    >
      <div className={styles.list}>
        <CategoryList categories={categories} />
      </div>
      <GrClose
        size={24}
        className={styles.closeButton}
        onClick={() => toggle(false)}
      />
    </motion.div>
  );
};
