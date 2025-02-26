"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "motion/react";

import { ModalContext } from "@/core";
import { CategoryInterface } from "@/shop/interfaces/category.interface";
import { CategorySelector } from "@/shop/components/category-selector/CategorySelector";

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

  const toggleSelector = (s: boolean) => {
    setShowSelector(s);
    toggleBackdrop(s);
  };

  return (
    <CategorySelectorContext.Provider
      value={{ categories, toggle: toggleSelector }}
    >
      {/* CategorySelector */}
      <AnimatePresence>{showSelector && <CategorySelector />}</AnimatePresence>
      {/* CategorySelector */}

      {children}
    </CategorySelectorContext.Provider>
  );
};

export { CategorySelectorContext, CategorySelectorProvider };
