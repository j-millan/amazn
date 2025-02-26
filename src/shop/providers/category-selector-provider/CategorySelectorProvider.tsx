"use client";

import { createContext, useContext, useState } from "react";

import { ModalContext } from "@/core";
import { CategoryInterface, CategorySelector } from "@/shop";
import styles from "./CategorySelectorProvider.module.css";

interface CategorySelectorContextProps {
  categories: CategoryInterface[];
  toggle: (s: boolean) => void;
}

const CategorySelectorContext = createContext<CategorySelectorContextProps>({
  categories: [],
  toggle: () => {},
});

interface CategorySelectorProps {
  children: React.ReactNode;
  categories: CategoryInterface[];
}

const CategorySelectorProvider = ({
  children,
  categories,
}: CategorySelectorProps) => {
  const { toggleBackdrop } = useContext(ModalContext);
  const [showSelector, setShowSelector] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  const toggleSelector = (s: boolean) => {
    if (s) {
      setSlideOut(false);
      setShowSelector(true);
    } else {
      setSlideOut(true);
      setTimeout(() => {
        setShowSelector(false);
      }, 200);
    }

    toggleBackdrop(s);
  };

  return (
    <CategorySelectorContext.Provider
      value={{ categories, toggle: toggleSelector }}
    >
      {/* CategorySelector */}
      {showSelector && (
        <CategorySelector
          className={`${styles.categorySelector} ${
            slideOut ? styles.hide : styles.show
          }`}
        />
      )}
      {/* CategorySelector */}

      {children}
    </CategorySelectorContext.Provider>
  );
};

export { CategorySelectorContext, CategorySelectorProvider };
