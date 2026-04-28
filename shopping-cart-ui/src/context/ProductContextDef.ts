import { createContext, useContext } from "react";
import type { Product } from "../types/Product";

export const ProductContext = createContext<
  | {
      products: Product[];
      loading: boolean;
      error: string | null;
    }
  | undefined
>(undefined);

export function useProductContext() {
  const context = useContext(ProductContext);
  console.log(context);
  if (!context)
    throw new Error("useProductContext must be used within a ProductProvider");
  return context;
}
