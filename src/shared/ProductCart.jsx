import { Link } from "react-router-dom";

export default function ({ product, i }) {
  return (
    <div
      className={`container flex flex-col ${i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-13 lg:gap-31.25 mt-16 md:mt-30 lg:mt-40`}
    >
      {/*//! Left Product Img Box */}
      <div className="lg:w-1/2 h-88 lg:h-140 bg-[#F1F1F1] flex items-center justify-center">
        <img
          className="h-[85%] object-contain"
          src={product.mainImg}
          alt="product-img"
        />
      </div>

      {/*//! Right Product Details */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-start">
        <p className="mb-4 text-[14px] text-[#D87D4A] leading-[100%] tracking-[10px] uppercase">
          NEW PRODUCT
        </p>

        <h2 className="mb-8 text-[40px] font-bold leading-11 tracking-[1.43px] uppercase">
          {product.name} {product.category}
        </h2>

        <p className="mb-10 text-[15px] text-black/50 leading-6">
          {product.des}
        </p>

        <Link
          to={`/product-details/${product.slug}`}
          className="btn bg-[#D87D4A]"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
