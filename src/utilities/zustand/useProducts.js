import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProducts = create(
  persist(
    (set) => ({
      products: [],
      isInitialized: false,

      setProducts: (data) =>
        set({
          products: data,
          isInitialized: true,
        }),

      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),

      removeProduct: (slug) =>
        set((state) => ({
          products: state.products.filter((p) => p.slug !== slug),
        })),

      updateProduct: (slug, updatedData) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.slug === slug ? { ...p, ...updatedData } : p,
          ),
        })),
    }),
    {
      name: "products-storage",
    },
  ),
);

export default useProducts;
