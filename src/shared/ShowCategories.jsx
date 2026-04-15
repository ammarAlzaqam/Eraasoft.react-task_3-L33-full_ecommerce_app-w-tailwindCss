import popularProducts from "../constants/categories";

export default function ShowCategories({ className }) {
  return (
    <div
      className={`container flex flex-col md:flex-row gap-17 md:gap-2.5 lg:gap-7.5 pt-50 ${className}`}
    >
      {popularProducts.map((p, i) => (
        <CategoryBox i={i} product={p} key={p.name} />
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";
import shadowImg from "../assets/products/shadow.png";

const CategoryBox = ({ product, i }) => {
  return (
    <Link
      to={`/category/${product.name}`}
      onClick={() => scrollTo(0, 0)}
      data-aos="fade-down"
      data-aos-delay={200 * i}
      className="group flex flex-col items-center justify-between gap-9 flex-1 bg-[#F1F1F1] pb-7.5"
    >
      {/*//? Img wrapper (shadow img) */}
      <div className="relative -mt-13.75 lg:-mt-20">
        <img className="w-21 lg:w-30.75" src={product.img} alt="products-img" />
        <img
          className="absolute bottom-0 translate-y-[50%] left-0 scale-150"
          src={shadowImg}
          alt="shadow-img"
        />
      </div>
      {/*//? Details text wrapper */}
      <div className="flex flex-col items-center gap-3.75">
        <h3 className="font-bold text-[15px] lg:text-[18px] leading-[100%] tracking-[1.3px] uppercase">
          {product.name}
        </h3>
        {/*//? Text and arrow icon wrapper */}
        <div className="flex gap-3 items-center">
          <p className="text-black/50 text-[13px] font-bold leading-[100%] tracking-[1px] uppercase transition duration-300 group-hover:text-[#D87D4A]">
            Shop
          </p>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.707031 0.707153L5.70703 5.70715L0.707031 10.7072"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
