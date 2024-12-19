export interface CategoryInterface {
  id: number;
  description: string;
  subcategories?: CategoryInterface[];
  imageUrl: string;
}