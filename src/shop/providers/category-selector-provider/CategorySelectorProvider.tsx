"use client";

import { createContext, useContext, useState } from "react";

import { ModalContext } from "@/core";
import { CategoryInterface, CategorySelector } from "@/shop";

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
  categories: CategoryInterface[],
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
      {showSelector && <CategorySelector />}
      {/* CategorySelector */}

      {children}
    </CategorySelectorContext.Provider>
  );
};

export { CategorySelectorContext, CategorySelectorProvider };
