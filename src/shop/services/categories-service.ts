import { Axios } from "@/core/config";
import { CategoryInterface } from "../interfaces/category.interface";

class CategoriesService {
  async getCategories(): Promise<CategoryInterface[]> {
    const response = await Axios.get<CategoryInterface[]>("/categories");
    return response.data;
  }

  async getCategory(id: number): Promise<CategoryInterface> {
    const response = await Axios.get<CategoryInterface>(`/categories/${id}`);
    return response.data;
  }
}

export const categoriesService = new CategoriesService();