/* eslint-disable @next/next/no-img-element */

import { Button, ButtonSizeEnum } from "@/shared";
import { ProductInterface } from "@/shop/interfaces/product.interface";
import { PriceTag } from "../price-tag/PriceTag";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price } = product;

  return (
    <div className={styles.productCard}>
      <img
        src="/image/not-found.png"
        alt={product.name}
        className={styles.thumbnail}
      />
      <div className={styles.info}>
        <a className={styles.name} title={name}>
          {name}
        </a>
        <PriceTag price={price} />
        <Button size={ButtonSizeEnum.SM} rounded={true}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};
