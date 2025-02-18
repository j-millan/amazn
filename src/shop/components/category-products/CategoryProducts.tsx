import { CategoryInterface } from "@/shop/interfaces/category.interface";
import { ProductInterface } from "@/shop/interfaces/product.interface";
import styles from "./CategoryProducts.module.css";
import { ProductCard } from "../product-card/ProductCard";

interface CategoryProductsProps {
  category: CategoryInterface;
  products: ProductInterface[];
}

export const CategoryProducts = ({
  category,
  products,
}: CategoryProductsProps) => {
  return (
    <div className={styles.categoryProducts}>
      <h3 className={styles.description}>{category.description}</h3>
      <div className={styles.slider}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
