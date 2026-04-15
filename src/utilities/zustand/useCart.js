import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (p) => p.slug === product.slug,
          );

          if (existingProduct) {
            // المنتج موجود → نزود count
            return {
              cart: state.cart.map((p) =>
                p.slug === product.slug ? { ...p, count: p.count + 1 } : p,
              ),
            };
          } else {
            // المنتج جديد → نضيفه
            return {
              cart: [...state.cart, { ...product, count: 1 }],
            };
          }
        }),

      // ➕ زيادة العدد
      increment: (slug) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.slug === slug ? { ...p, count: p.count + 1 } : p,
          ),
        })),

      // ➖ تقليل العدد + حذف لو 0
      decrement: (slug) =>
        set((state) => ({
          cart: state.cart
            .map((p) => (p.slug === slug ? { ...p, count: p.count - 1 } : p))
            .filter((p) => p.count > 0),
        })),

      removeFromCart: (slug) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.slug !== slug),
        })),

      clearCart: () =>
        set(() => ({
          cart: [],
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCart;
