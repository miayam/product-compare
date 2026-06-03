import { useQueries } from "@tanstack/react-query";
import { fetchProduct } from "../../api/client";
import { useCompareStore } from "../../store/useCompareStore";

const useComparison = () => {
  const { compareList, clearComparison, removeFromCompare } = useCompareStore();

  // useQueries returns an array of query results
  const queries = useQueries({
    queries: compareList.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => fetchProduct(id),
      enabled: !!id,
    })),
  });

  const products = queries.map((q) => q.data).filter(Boolean);
  const isLoading = queries.some((q) => q.isLoading);

  return {
    products,
    isLoading,
    compareList,
    clearComparison,
    removeFromCompare,
  };
};

export default useComparison;
