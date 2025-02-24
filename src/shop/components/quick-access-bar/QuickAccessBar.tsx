"use client";

import { useContext } from "react";
import { TbMenuDeep } from "react-icons/tb";

import { CategorySelectorContext } from "@/shop/providers/category-selector-provider/CategorySelectorProvider";
import styles from "./QuickAccessBar.module.css";

export const QuickAccessBar = () => {
  const { toggle } = useContext(CategorySelectorContext);

  return (
    <div className={styles.quickAccessBar}>
      <span
        className={`${styles.item} ${styles.categorySelector}`}
        onClick={() => toggle(true)}
      >
        <TbMenuDeep size={20} className={styles.icon} /> Categories
      </span>
      <span className={styles.item}>Todays deals</span>
      <span className={styles.item}>Customer service</span>
      <span className={styles.item}>Registry</span>
      <span className={styles.item}>Gift cards</span>
    </div>
  );
};
