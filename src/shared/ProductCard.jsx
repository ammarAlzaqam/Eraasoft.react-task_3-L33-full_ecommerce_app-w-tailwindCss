import clsx from "clsx";
import { BiPlus } from "react-icons/bi";
import { BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ({ product, i = 0, type = "multi" }) {
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
              $ {product.price}
            </p>
            <div className="flex gap-4">
              <div className="btn bg-[#F1F1F1] text-black flex items-center gap-5 cursor-auto">
                <BsDash className="text-[16px] text-black/25 cursor-pointer" />
                1
                <BiPlus className="text-[16px] text-black/25 cursor-pointer" />
              </div>
              <button className="btn bg-[#D87D4A]">Add To Cart</button>
            </div>
          </>
        ) : (
          <Link
            to={`/product-details/${product.slug}`}
            className="btn bg-[#D87D4A]"
          >
            See Product
          </Link>
        )}
      </div>
    </div>
  );
}
