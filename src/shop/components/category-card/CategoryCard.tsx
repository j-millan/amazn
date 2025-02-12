/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { CategoryResponseDto } from "@/shop";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: CategoryResponseDto;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { description, id, slug } = category;

  return (
    <div className={styles.categoryCard}>
      <h3 className={styles.title}>{description}</h3>

      {/* Subcategories */}
      <div className={styles.subCategories}>
        {category.children?.map(({ id, description, imageUrl, slug }) => (
          <Link href={`/categories/${id}/${slug}`} key={id}>
            <div className={styles.subCategory}>
              <img src={imageUrl} alt={description} />
              <span className={styles.description}>{description}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* Subcategories */}

      <a
        href={`/categories/${id}/${slug}`}
        className={`${styles.seeMore} link`}
      >
        See more
      </a>
    </div>
  );
};
