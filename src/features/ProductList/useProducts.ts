import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/client";

const LIMIT = 20; // Items per page

const useProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  // Calculate skip value based on current page
  const skip = (page - 1) * LIMIT;

  const { data, isLoading } = useQuery({
    queryKey: ["products", searchQuery, page],
    queryFn: () => fetchProducts(searchQuery, skip, LIMIT),
  });

  const products = data?.products || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / LIMIT);

  // Reset to page 1 when search query changes
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  return {
    products,
    isLoading,
    searchQuery,
    setSearchQuery: handleSearch,
    page,
    setPage,
    totalPages,
    total,
  };
};

export default useProducts;
