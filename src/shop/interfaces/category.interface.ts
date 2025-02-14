export interface CategoryInterface {
  id: number;
  description: string;
  slug: string;
  imageUrl: string;

  parent?: CategoryInterface;
  parentId?: number;
  children?: CategoryInterface[];
}