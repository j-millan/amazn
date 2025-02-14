import { CategoryInterface } from "./category.interface";

export interface ProductInterface {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  stock: boolean;
  category: CategoryInterface;
  createdAt: string;
  updatedAt: string;
}