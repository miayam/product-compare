import type { Product, ProductsResponse } from "./types";

const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async (
  query: string,
  skip: number = 0,
  limit: number = 10,
): Promise<ProductsResponse> => {
  const endpoint = query
    ? `${BASE_URL}/products/search?q=${query}&limit=${limit}&skip=${skip}`
    : `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  const res = await fetch(endpoint);
  return res.json();
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
