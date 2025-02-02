import { Axios } from "@/core/config";
import { CategoryResponseDto } from "../dto/category.dto";

class CategoriesService {
  async getCategories(): Promise<CategoryResponseDto[]> {
    const response = await Axios.get<CategoryResponseDto[]>("/categories");
    console.debug(response);
    return response.data;
  }
}

export const categoriesService = new CategoriesService();