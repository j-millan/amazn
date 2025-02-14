"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { useCategory } from "@/shop";

const CategoryPage = () => {
  const router = useRouter();
  const { params } = useParams<{ params: string[] }>();

  const id = parseInt(params[0]);
  const slug = params[1];

  if (Number.isNaN(id)) {
    router.push("/categories");
  }

  const { category, loading, error } = useCategory(id);

  useEffect(() => {
    if (loading) return;
    if (slug !== category.slug) {
      router.push(`/categories/${id}/${category.slug}`);
    }
  }, [id, slug, category, loading, router]);

  return (
    <div>
      <h2>{ loading ? 'Loading...' : `Category: ${category.description}`}</h2>
      <p>{error}</p>
    </div>
  );
};

export default CategoryPage;
