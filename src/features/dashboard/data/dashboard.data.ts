import type { Order, Review, Product } from "../types/dashboard.types";

export const orders: readonly Order[] = [
  {
    id: "PG-1024",
    customer: "Salim Maris",
    initials: "SM",
    date: "2026-10-23T09:56:00",
    items: 1,
    total: 31.81,
  },
  {
    id: "PG-1023",
    customer: "Alessandra Sisti",
    initials: "AS",
    date: "2026-10-23T09:42:00",
    items: 2,
    total: 62.74,
  },
  {
    id: "PG-1022",
    customer: "Loma Quigley",
    initials: "LQ",
    date: "2026-10-22T17:21:00",
    items: 3,
    total: 94.5,
  },
  {
    id: "PG-1021",
    customer: "Cedrick Kirlin",
    initials: "CK",
    date: "2026-10-22T15:08:00",
    items: 1,
    total: 28.0,
  },
];
export const reviews: readonly Review[] = [
  {
    id: 1,
    name: "Ralph Hoppe",
    initials: "RH",
    rating: 5,
    title: "A little art, a lot of joy.",
    text: "Beautiful print quality. The colors look even better in person. A perfect addition to my studio.",
    product: "Abstract Landscape",
    date: "2 hours ago",
  },
  {
    id: 2,
    name: "Vidal Kuhlman",
    initials: "VK",
    rating: 4,
    title: "Just what I was looking for.",
    text: "Lovely paper and carefully packaged. My gallery wall is finally coming together.",
    product: "Botanical Study",
    date: "4 hours ago",
  },
  {
    id: 3,
    name: "Margie Gorczany",
    initials: "MG",
    rating: 5,
    title: "Already ordering another.",
    text: "Such a thoughtful collection. This one has become my favorite corner of the house.",
    product: "Blue Hour",
    date: "Yesterday",
  },
];
export const customers = [
  "Cedrick Kirlin",
  "Alessandra Sisti",
  "Loma Quigley",
  "Donnell Nienow",
  "Ross Lockman",
  "Vidal Kuhlman",
  "Ralph Hoppe",
  "Angela Kautzer",
];
export const products: readonly Product[] = [
  {
    name: "Abstract Landscape",
    category: "Fine art · 50 × 70 cm",
    className: "landscape",
    price: 31.81,
  },
  {
    name: "Botanical Study",
    category: "Botanical · 30 × 40 cm",
    className: "botanical",
    price: 28,
  },
  {
    name: "Blue Hour",
    category: "Photography · 50 × 70 cm",
    className: "blue-hour",
    price: 36.5,
  },
];
