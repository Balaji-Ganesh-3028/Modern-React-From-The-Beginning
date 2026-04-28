import { createContext, useContext } from "react";
import type { Product } from "../types/Product";

export type CartItem = Product & { qty: number };

export const CartContext = createContext<
  | {
      cartItems: CartItem[];
      addToCart: (product: Product) => void;
      removeFromCart: (id: number) => void;
      clearCart: () => void;
    }
  | undefined
>(undefined);

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
