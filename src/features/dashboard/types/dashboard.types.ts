export type StatTone = "revenue" | "orders" | "reviews" | "customers";
export interface Order {
  id: string;
  customer: string;
  initials: string;
  date: string;
  items: number;
  total: number;
}
export interface Review {
  id: number;
  name: string;
  initials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  text: string;
  product: string;
  date: string;
}
export interface Product {
  name: string;
  category: string;
  className: "landscape" | "botanical" | "blue-hour";
  price: number;
}
