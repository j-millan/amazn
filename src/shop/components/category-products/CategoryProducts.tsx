import { CategoryInterface } from "@/shop/interfaces/category.interface";
import { ProductInterface } from "@/shop/interfaces/product.interface";
import styles from "./CategoryProducts.module.css";

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
      <h4 className={styles.description}>{category.description}</h4>
      <div className={styles.slider}>
        {products.map(({ id, name }) => (
          <div className={styles.product} key={id}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
