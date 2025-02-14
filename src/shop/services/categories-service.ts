import { http } from "@/core";
import { CategoryInterface } from "../interfaces/category.interface";

class CategoriesService {
  private readonly _basePath = "/categories";
  async getCategories(): Promise<CategoryInterface[]> {
    return await http.get<CategoryInterface[]>(this._basePath);
  }

  async findCategory(id: number): Promise<CategoryInterface> {
    return await http.get<CategoryInterface>(`${this._basePath}/${id}`, { cache: 'force-cache' });
  }
}

export const categoriesService = new CategoriesService();
