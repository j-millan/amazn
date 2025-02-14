import { Spinner, SpinnerSizeEnum } from "@/shared";
import { useProducts } from "@/shop/hooks/use-products";
import styles from "./CategoryProducts.module.css";

interface CategoryProductsProps {
  categoryId: number;
}

export const CategoryProducts = ({ categoryId }: CategoryProductsProps) => {
  const params = { category: categoryId, pageSize: 10 };
  const { results: products, loading } = useProducts(params);

  return (
    <div className={styles.categoryProducts}>
      {
        loading ? (
          <Spinner size={SpinnerSizeEnum.LG}/>
        ) : (
          <ul>
            {products.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
