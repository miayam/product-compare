import type { Product } from "./types";

const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async (query: string): Promise<Product[]> => {
  const endpoint = query
    ? `${BASE_URL}/products/search?q=${query}`
    : `${BASE_URL}/products?limit=20`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data.products;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const fetchSuggestions = async (
  category: string,
): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  const data = await res.json();
  return data.products;
};
