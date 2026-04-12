import Bring from "../shared/Bring";
import HeroSec from "./components/HeroSec";
import Products from "./components/Products";

export default function Home() {
  return (
    <section>
      <HeroSec />
      <Products />
      <Bring />
    </section>
  );
}
