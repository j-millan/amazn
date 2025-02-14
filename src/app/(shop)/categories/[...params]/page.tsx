import { notFound, redirect } from "next/navigation";

import { categoriesService } from "@/shop";
import styles from "./page.module.css";

interface CategoryPageParams {
  params: string[]
}

interface CategoryPageProps {
  params: CategoryPageParams;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const id = parseInt(params.params[0]);
  const slug = params.params[1];

  if (Number.isNaN(id)) {
    notFound();
  }

  const category = await categoriesService.findCategory(id);

  if (slug !== category.slug) {
    redirect(`/categories/${id}/${category.slug}`);
  }

  return (
    <div className={styles.categoryPage}>
      <h2>Category: {category.description}</h2>
    </div>
  );
}

export default CategoryPage;
