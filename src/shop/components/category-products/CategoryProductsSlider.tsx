import { CategoryInterface } from "@/shop/interfaces/category.interface";
import { ProductInterface } from "@/shop/interfaces/product.interface";
import { ProductCard } from "../product-card/ProductCard";      
import styles from "./CategoryProductsSlider.module.css";

interface CategoryProductsSliderProps {
  category: CategoryInterface;
  products: ProductInterface[];
}

export const CategoryProductsSlider = ({
  category,
  products,
}: CategoryProductsSliderProps) => {
  return (
    <div className={styles.categoryProducts}>
      <h3 className={styles.description}>{category.description}</h3>
      <span className={styles.helpText}>
        Check each product page for more buying options.
      </span>
      <div className={styles.slider}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
