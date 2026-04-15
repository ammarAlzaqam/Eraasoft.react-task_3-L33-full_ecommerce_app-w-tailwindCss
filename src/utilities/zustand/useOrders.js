import { create } from "zustand";
import { persist } from "zustand/middleware";
import ORDER_STATUS from "../../constants/orderState";

const useOrders = create(
  persist(
    (set) => ({
      orders: [],

      addOrder: (products = []) =>
        set((state) => {
          const clonedProducts = products.map((item) => ({ ...item }));

          const total = clonedProducts.reduce(
            (acc, item) => acc + item.price * item.count,
            0,
          );

          const vat = total * 0.2;
          const shipping = 50;
          const grandTotal = total + vat + shipping;

          return {
            orders: [
              ...state.orders,
              {
                id: crypto.randomUUID(),
                products: clonedProducts,
                state: ORDER_STATUS.PENDING,
                total,
                vat,
                shipping,
                grandTotal,
                createdAt: new Date().toISOString(),
              },
            ],
          };
        }),

      removeOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id),
        })),

      clearOrders: () =>
        set(() => ({
          orders: [],
        })),
    }),
    {
      name: "orders-storage",
    },
  ),
);

export default useOrders;
