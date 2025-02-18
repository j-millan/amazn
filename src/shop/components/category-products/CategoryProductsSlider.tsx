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
  const { id, description, slug } = category;
  const categoryUrl = `/categories/${id}/${slug}`;

  return (
    <div className={styles.categoryProducts}>
      <h3>{description}</h3>

      {/* Help text */}
      <span className={styles.helpText}>
        <span className={styles.message}>
          Check each product page for more buying options.
        </span>
        <a href={categoryUrl} className={`${styles.seeMore} link`}>
          See more products
        </a>
      </span>
      {/* Help text */}

      {/* Slider */}
      <div className={styles.slider}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      {/* Slider */}
    </div>
  );
};
