import { useQuery, useQueries } from "@tanstack/react-query"; // Added useQueries
import { fetchProduct, fetchSuggestions } from "../../api/client";
import { useCartStore } from "../../store/useCartStore";

const useCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  // 1. Fetch cart items in parallel
  const cartQueries = useQueries({
    queries: cartItems.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => fetchProduct(id),
    })),
  });

  const cartProducts = cartQueries.map((q) => q.data).filter(Boolean);

  // 2. Smart Cart: Suggest based on last added item
  const lastAddedItem = cartProducts[cartProducts.length - 1];
  const category = lastAddedItem?.category || "";

  const { data: suggestions = [] } = useQuery({
    queryKey: ["suggestions", category],
    queryFn: () => fetchSuggestions(category),
    enabled: !!category, // Only run if a category exists
  });

  // 3. Filter out items already in cart from suggestions
  const filteredSuggestions = suggestions.filter(
    (s) => !cartItems.includes(s.id),
  );

  return {
    cartProducts,
    suggestions: filteredSuggestions,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
