"use client";

import Link from "next/link";

import { CategoryResponseDto } from "@/shop";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: CategoryResponseDto;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { description } = category;

  return (
    <div className={styles.categoryCard}>
      <h3 className={styles.title}>{description}</h3>

      {/* Subcategories */}
      <div className={styles.subCategories}>
        {category.children?.map(({ id, description, imageUrl }) => (
          <Link href={"#"} key={id}>
            <div className={styles.subCategory}>
              <img
                src={imageUrl}
                alt={description}
              />
              <span className={styles.description}>{description}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* Subcategories */}

      <a href="#" className={`${styles.seeMore} link`}>
        See more
      </a>
    </div>
  );
};
