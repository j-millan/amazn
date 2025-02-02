export interface CategoryResponseDto {
  id: number;
  description: string;
  slug: string;
  imageUrl: string;

  parent?: CategoryResponseDto;
  parentId?: number;
  children?: CategoryResponseDto[];
}