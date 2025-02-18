/* eslint-disable @next/next/no-img-element */
import { ProductInterface } from "@/shop/interfaces/product.interface";
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
        <a className={styles.name}>{name}</a>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
};
