import popularProducts from "../constants/categories";

export default function ShowCategories({ className, type = "home" }) {
  return (
    <div
      className={`container flex flex-col md:flex-row gap-17 lg:gap-7.5 md:gap-2.5 pt-50 ${className}`}
    >
      {popularProducts.map((p, i) => (
        <CategoryBox type={type} i={i} product={p} key={p.name} />
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";
import shadowImg from "../assets/products/shadow.png";
import clsx from "clsx";

const CategoryBox = ({ product, i, type }) => {
  return (
    <Link
      to={`/category/${product.name}`}
      onClick={() => scrollTo(0, 0)}
      data-aos="fade-down"
      data-aos-delay={200 * i}
      className={clsx(
        "group flex flex-col items-center justify-between flex-1 bg-[#F1F1F1] pb-7.5",
        type === "sideBar" ? "gap-6 lg:gap-9" : "gap-9",
      )}
    >
      {/*//? Img wrapper (shadow img) */}
      <div
        className={clsx(
          "relative",
          type === "sideBar" ? "-mt-7 lg:-mt-20" : "-mt-13.75 lg:-mt-20",
        )}
      >
        <img
          className={clsx(
            type === "sideBar" ? "w-12 lg:w-30.75" : "w-21 lg:w-30.75",
          )}
          src={product.img}
          alt="products-img"
        />
        <img
          className="absolute bottom-0 translate-y-[50%] left-0 scale-150"
          src={shadowImg}
          alt="shadow-img"
        />
      </div>
      {/*//? Details text wrapper */}
      <div className="flex flex-col items-center gap-3.75">
        <h3
          className={clsx(
            "font-bold lg:text-[18px] leading-[100%]",
            type === "sideBar"
              ? "text-[10px] tracking-[1px]"
              : "text-[15px] uppercase tracking-[1.3px]",
          )}
        >
          {product.name}
        </h3>
        {/*//? Text and arrow icon wrapper */}
        <div className="flex gap-3 items-center">
          <p
            className={clsx(
              "text-black/50 font-bold leading-[100%] uppercase transition duration-300 group-hover:text-[#D87D4A]",
              type === "sideBar"
                ? "text-[11px] tracking-[.8px]"
                : "text-[13px] tracking-[1px]",
            )}
          >
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
