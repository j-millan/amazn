import { notFound, redirect } from "next/navigation";

import {
  categoriesService,
  CategoryInterface,
  CategoryProducts,
  ProductInterface,
  productsService,
} from "@/shop";
import styles from "./page.module.css";

interface CategoryPageParams {
  params: string[];
}

interface CategoryPageProps {
  params: CategoryPageParams;
}

const getProductsByCategory = async (
  category: number
): Promise<ProductInterface[]> => {
  const response = await productsService.getProducts({
    category,
    pageSize: 10,
  });
  return response?.results || [];
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const id = parseInt(params.params[0]);
  const slug = params.params[1];
  let category!: CategoryInterface;

  if (Number.isNaN(id)) {
    notFound();
  }

  try {
    category = await categoriesService.findCategory(id);
  } catch {
    notFound();
  }

  if (slug !== category.slug) {
    redirect(`/categories/${id}/${category.slug}`);
  }

  return (
    <div className={styles.categoryPage}>
      <h2>Exploring: {category.description}</h2>
      <div className={styles.products}>
        {category.children?.map(async (cat) => (
          <CategoryProducts
            key={cat.id}
            category={cat}
            products={await getProductsByCategory(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
