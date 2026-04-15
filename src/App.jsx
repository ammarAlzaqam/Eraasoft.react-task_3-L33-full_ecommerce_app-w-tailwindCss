import Aos from "aos";
import { useRoutes } from "react-router-dom";
import { routes } from "./utilities/routes.jsx";
import { useEffect } from "react";
import useCart from "./utilities/zustand/useCart.js";
import useProducts from "./utilities/zustand/useProducts.js";
import products from "./constants/products.js";

export default function App() {
  const setProducts = useProducts((state) => state.setProducts);
  const isInitialized = useProducts((state) => state.isInitialized);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });

    if (!isInitialized) {
      setProducts(products);
    }
  }, []);

  return useRoutes(routes);
}
