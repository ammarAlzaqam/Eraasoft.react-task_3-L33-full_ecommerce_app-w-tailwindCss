import { useParams } from "react-router-dom";
import products from "../constants/products";
import HeroSec from "../shared/heroSec";
import ProductCard from "../shared/ProductCard";
import Bring from "../shared/Bring";
import ShowCategories from "../shared/ShowCategories";

export default function Category() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase().trim() === category.toLowerCase().trim(),
  );

  return (
    <section className="flex flex-col">
      <HeroSec productCategory={category} />

      {filteredProducts.map((p, i) => (
        <ProductCard key={p.slug} product={p} i={i} />
      ))}

      <ShowCategories className="lg:pt-60" />
      <Bring />
    </section>
  );
}
