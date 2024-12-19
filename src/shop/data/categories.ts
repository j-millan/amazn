import { CategoryInterface } from "../interfaces/category.interface";

export const categories: CategoryInterface[] = [
  {
    id: 1,
    description: "Tech Essentials",
    imageUrl: "/image/categories/tech-essentials.jpg",
    subcategories: [
      {
        id: 11,
        description: "Keyboards & Mice",
        imageUrl: "/image/categories/keyboards-mice.jpg",
      },
      {
        id: 12,
        description: "Gaming Headsets",
        imageUrl: "/image/categories/gaming-headsets.jpg",
      },
      {
        id: 13,
        description: "Gaming Chairs",
        imageUrl: "/image/categories/gaming-chairs.jpg",
      },
      {
        id: 14,
        description: "VR & Accessories",
        imageUrl: "/image/categories/vr-accessories.jpg",
      },
    ],
  },
  {
    id: 2,
    description: "Interior Design",
    imageUrl: "/image/categories/interior-design.jpg",
    subcategories: [
      {
        id: 21,
        description: "Decorative Accents",
        imageUrl: "/image/categories/decorative-accents.jpg",
      },
      {
        id: 22,
        description: "Textiles & Rugs",
        imageUrl: "/image/categories/textiles-rugs.jpg",
      },
      {
        id: 23,
        description: "Lighting Solutions",
        imageUrl: "/image/categories/lighting-solutions.jpg",
      },
      {
        id: 24,
        description: "Wall Art & Mirrors",
        imageUrl: "/image/categories/wall-art-mirrors.jpg",
      },
    ],
  },
  {
    id: 3,
    description: "Fashion & Style",
    imageUrl: "/image/categories/fashion-style.jpg",
    subcategories: [
      {
        id: 31,
        description: "Outerwear & Jackets",
        imageUrl: "/image/categories/outerwear-jackets.jpg",
      },
      {
        id: 32,
        description: "Tops & Tees",
        imageUrl: "/image/categories/tops-tees.jpg",
      },
      {
        id: 33,
        description: "Bottoms & Jeans",
        imageUrl: "/image/categories/bottoms-jeans.jpg",
      },
      {
        id: 34,
        description: "Shoes & Footwear",
        imageUrl: "/image/categories/shoes-footwear.jpg",
      },
    ],
  },
  {
    id: 4,
    description: "Creative Supplies",
    imageUrl: "/image/categories/creative-supplies.jpg",
    subcategories: [
      {
        id: 41,
        description: "Painting & Drawing",
        imageUrl: "/image/categories/painting-drawing.jpg",
      },
      {
        id: 42,
        description: "Crafting Materials",
        imageUrl: "/image/categories/crafting-materials.jpg",
      },
      {
        id: 43,
        description: "Sculpting & Pottery",
        imageUrl: "/image/categories/sculpting-pottery.jpg",
      },
      {
        id: 44,
        description: "Paper Crafts & Stationery",
        imageUrl: "/image/categories/paper-craft.jpg",
      },
    ],
  },
  {
    id: 5,
    description: "Home Appliances",
    imageUrl: "/image/categories/home-appliances.jpg",
    subcategories: [
      {
        id: 51,
        description: "Kitchen Appliances",
        imageUrl: "/image/categories/kitchen-appliances.jpg",
      },
      {
        id: 52,
        description: "Laundry & Cleaning",
        imageUrl: "/image/categories/laundry-cleaning.jpg",
      },
      {
        id: 53,
        description: "Heating & Cooling",
        imageUrl: "/image/categories/heating-cooling.jpg",
      },
      {
        id: 54,
        description: "Small Appliances",
        imageUrl: "/image/categories/small-appliances.jpg",
      },
    ],
  },
  {
    id: 6,
    description: "Books & Media",
    imageUrl: "/image/categories/books-media.jpg",
    subcategories: [
      {
        id: 61,
        description: "Books",
        imageUrl: "/image/categories/books.jpg",
      },
      {
        id: 62,
        description: "Vinyls & Music",
        imageUrl: "/image/categories/vinyls-music.jpg",
      },
      {
        id: 63,
        description: "Movies & TV",
        imageUrl: "/image/categories/movies-tv.jpg",
      },
      {
        id: 64,
        description: "Magazines",
        imageUrl: "/image/categories/magazines.jpg",
      },
    ],
  },
  {
    id: 7,
    description: "Health & Beauty",
    imageUrl: "/image/categories/health-beauty.jpg",
    subcategories: [
      {
        id: 71,
        description: "Skincare",
        imageUrl: "/image/categories/skincare.jpg",
      },
      {
        id: 72,
        description: "Makeup",
        imageUrl: "/image/categories/makeup.jpg",
      },
      {
        id: 73,
        description: "Hair Care",
        imageUrl: "/image/categories/hair-care.jpg",
      },
      {
        id: 74,
        description: "Personal Care",
        imageUrl: "/image/categories/personal-care.jpg",
      },
    ],
  },
  {
    id: 8,
    description: "Sports & Outdoors",
    imageUrl: "/image/categories/.jpg",
    subcategories: [
      {
        id: 81,
        description: "Fitness & Exercise",
        imageUrl: "/image/categories/fitness-excercise.jpg",
      },
      {
        id: 82,
        description: "Sports",
        imageUrl: "/image/categories/sports.jpg",
      },
      {
        id: 83,
        description: "Outdoor Recreation",
        imageUrl: "/image/categories/outdoor-recreation.jpg",
      },
    ],
  },
];
