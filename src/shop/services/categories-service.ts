import { Axios } from "@/core/config";
import { CategoryResponseDto } from "../dto/category.dto";

class CategoriesService {
  async getCategories(): Promise<CategoryResponseDto[]> {
    const response = await Axios.get<CategoryResponseDto[]>("/categories");
    return response.data;
  }

  async getCategory(id: number): Promise<CategoryResponseDto> {
    const response = await Axios.get<CategoryResponseDto>(`/categories/${id}`);
    return response.data;
  }
}

export const categoriesService = new CategoriesService();