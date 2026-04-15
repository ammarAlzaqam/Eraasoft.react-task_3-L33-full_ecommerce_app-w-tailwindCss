import clsx from "clsx";
import { BiPlus } from "react-icons/bi";
import { BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../utilities/zustand/useCart";
import { useEffect, useRef } from "react";

export default function ({ product, i = 0, type = "multi" }) {
  const addToCart = useCart((state) => state.addToCart);
  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  const cart = useCart((state) => state.cart);

  const cartProduct = cart.find((c) => c.slug === product.slug);

  const count = cartProduct?.count || 0;

  const prevCountRef = useRef(count);

  const isIncrease = count > prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div
      className={clsx(
        i % 2 == 0 || type === "single" ? "lg:flex-row" : "lg:flex-row-reverse",
        type === "single" ? "mt-6 lg:mt-14" : "mt-16 md:mt-30 lg:mt-40",
        "container flex flex-col gap-13 lg:gap-31.25",
      )}
    >
      {/*//! Left Product Img Box */}
      <div
        data-aos="zoom-out"
        className="lg:w-1/2 h-88 lg:h-140 bg-[#F1F1F1] flex items-center justify-center"
      >
        <img
          className="h-[85%] object-contain"
          src={product.mainImg}
          alt="product-img"
        />
      </div>

      {/*//! Right Product Details */}
      <div
        data-aos="flip-up"
        className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-start"
      >
        <p
          className={clsx(
            product.new ? "block" : "hidden",
            "mb-4 text-[14px] text-[#D87D4A] leading-[100%] tracking-[10px] uppercase",
          )}
        >
          NEW PRODUCT
        </p>

        <h2 className="mb-8 text-[40px] font-bold leading-11 tracking-[1.43px] uppercase">
          {product.name} {product.category}
        </h2>

        <p className="mb-10 text-[15px] text-black/50 leading-6">
          {product.des}
        </p>

        {type === "single" ? (
          <>
            <p className="mb-12 font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase">
              $ {product.price.toLocaleString()}
            </p>
            <div className="flex gap-4">
              <div className="w-30 bg-[#F1F1F1] text-black flex items-center justify-center gap-5 cursor-auto">
                <BsDash
                  onClick={() => decrement(product.slug)}
                  className={clsx(
                    count
                      ? "cursor-pointer transition duration-300 hover:text-red-500 hover:scale-125"
                      : "cursor-not-allowed",
                    "text-[16px] text-black/25",
                  )}
                />
                <span
                  key={count}
                  className={clsx(
                    isIncrease
                      ? "animate-pop-up-green"
                      : "animate-pop-down-red",
                    "font-bold text-[13px] tracking-[1px] inline-block select-none",
                  )}
                >
                  {count}
                </span>
                <BiPlus
                  onClick={() => increment(product.slug)}
                  className={clsx(
                    count
                      ? "cursor-pointer transition duration-300 hover:text-green-500 hover:scale-125"
                      : "cursor-not-allowed",
                    "text-[16px] text-black/25",
                  )}
                />
              </div>
              <button
                className="btn bg-[#D87D4A]"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </>
        ) : (
          <Link
            to={`/product-details/${product.slug}`}
            className="btn bg-[#D87D4A]"
            onClick={() => scrollTo(0, 0)}
          >
            See Product
          </Link>
        )}
      </div>
    </div>
  );
}
