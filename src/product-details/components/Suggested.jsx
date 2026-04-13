import { Link } from "react-router-dom";
import slugify from "slugify";

export default function Suggested({ suggestedProducts }) {
  return (
    <div className="container flex flex-col items-center gap-10 md:gap-16 mt-30 lg:mt-40">
      <h2 className="font-bold text-[24px] md:text-[32px] leading-9 md:leading-9 tracking-[0.86px] md:tracking-[1.14px] uppercase text-center">
        You may also like
      </h2>
      {/*//! All cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-7.5">
        {/*//! Product card */}
        {suggestedProducts.map((p) => {
          const slug = slugify(p.name, {
            lower: true,
            trim: true,
          });

          return (
            <div key={p.name} className="flex flex-col items-center">
              {/* //! Img Box */}
              <div
                data-aos="zoom-in"
                className="w-full h-30 md:h-79.5 rounded-lg bg-[#f1f1f1] flex items-center justify-center"
              >
                <img
                  className="h-[80%] md:h-[60%]"
                  src={p.img}
                  alt="product-img"
                />
              </div>
              <h3
                data-aos="fade-up"
                className="font-bold text-[24px] leading-[100%] tracking-[1.71px] uppercase mt-8 md:mt-10 mb-8"
              >
                {p.name}
              </h3>
              <Link
                data-aos="fade-up"
                to={`/product-details/${slug}`}
                className="btn bg-[#D87D4A]"
              >
                See Product
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
