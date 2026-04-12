import { useParams } from "react-router-dom";
import products from "../constants/products";
import GoBack from "./components/GoBack";
import ProductCard from "../shared/ProductCard";
import Features from "./components/Features";
import Gallery from "./components/gallery";
import Suggested from "./components/suggested";
import ShowCategories from "../shared/ShowCategories";
import Bring from "../shared/Bring";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);
  console.log(product);
  return (
    <section className="flex flex-col">
      <GoBack category={product.category} />
      <ProductCard product={product} type="single" />
      <Features features={product.features} inTheBox={product.inTheBox} />
      <Gallery gallery={product.gallery} />
      <Suggested suggestedProducts={product.suggestedProducts} />
      <ShowCategories />
      <Bring />
    </section>
  );
}
