import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: number[]; // Array of product IDs
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (id) =>
        set((state) => {
          if (state.cartItems.includes(id)) return state;
          return { cartItems: [...state.cartItems, id] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i !== id),
        })),
    }),
    { name: "cart-storage" },
  ),
);
