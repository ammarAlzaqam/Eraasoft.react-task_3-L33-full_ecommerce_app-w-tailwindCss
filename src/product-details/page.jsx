import { useParams } from "react-router-dom";
import ProductCard from "../shared/ProductCard";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Suggested from "./components/suggested";
import ShowCategories from "../shared/ShowCategories";
import Bring from "../shared/Bring";
import useProducts from "../utilities/zustand/useProducts";
import GoBack from "../shared/GoBack";

export default function ProductDetails() {
  const { slug } = useParams();
  const products = useProducts((state) => state.products);

  const product = products.find((p) => p.slug === slug);

  return (
    <section className="flex flex-col">
      <GoBack />
      <ProductCard product={product} type="single" />
      <Features features={product.features} inTheBox={product.inTheBox} />
      <Gallery gallery={product.gallery} />
      <Suggested suggestedProducts={product.suggestedProducts} />
      <ShowCategories />
      <Bring />
    </section>
  );
}
