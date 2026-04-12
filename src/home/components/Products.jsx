export default function Products() {
  return (
    <section>
      <div className="container">
        {/*//! Products Wrapper */}
        <PopularProducts />
        {/*//! Show products wrapper */}
        <div className="pt-42 flex flex-col gap-12 ">
          <Product1Card />
          <Product2Card />
          <Product3Card />
        </div>
      </div>
    </section>
  );
}

import speakerZX9Img from "../../assets/products/single-products/speaker-zx9.png";
import circleVectorImg from "../../assets/products/single-products/circle-vector.png";
import circleVector2Img from "../../assets/products/single-products/circle-vector2.png";
const Product1Card = () => {
  return (
    <div className="relative bg-[#d87d4a] flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-16 rounded-lg lg:pl-12 xl:pl-29.5 lg:pr-9 xl:pr-23.75 2xl:px-55 *:z-10 pt-13.5 pb-16 lg:py-0 ">
      {/*//! circle img vector */}
      <img
        className="absolute top-0 left-0 h-full w-[80%] object-cover hidden lg:flex"
        src={circleVectorImg}
        alt="vector-img"
        data-aos="zoom-in"
        data-aos-delay="200"
      />

      <img
        className="absolute top-0 left-0 w-full h-[90%] object-cover flex lg:hidden"
        src={circleVector2Img}
        alt="vector-img"
        data-aos="zoom-in"
        data-aos-delay="200"
      />

      {/*//! Lift img */}
      <div className="flex items-end">
        <img
          className="w-49.25 lg:w-auto"
          src={speakerZX9Img}
          alt="product-img"
          data-aos="fade-down"
        />
      </div>
      {/*//! Right text */}
      <div
        data-aos="fade-up"
        className="lg:pt-33.25 lg:pb-31 w-87.25 max-w-[90%] 2xl:w-120 flex flex-col items-center lg:items-start text-center lg:text-start"
      >
        <h2 className="text-white text-[36px] lg:text-[56px] font-bold leading-10 lg:leading-14.5 tracking-[2px] uppercase mb-6">
          ZX9 Speaker
        </h2>
        <p className="des text-white/75 leading-6 mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="btn bg-black">See Product</button>
      </div>
    </div>
  );
};

import speakerZX7Img from "../../assets/products/single-products/speaker-zx7.png";
const Product2Card = () => {
  return (
    <div
      data-aos="zoom-in"
      className="relative pl-6 md:pl-15.5 py-25.25 rounded-lg overflow-hidden"
    >
      {/*//! bg img */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-bottom-right 2xl:object-[right_-380px] z-1"
        src={speakerZX7Img}
        alt="product-img"
      />

      <div className="flex flex-col items-start gap-8 *:z-10">
        <h3 className="text-[28px] font-bold leading-[100%] tracking-[2px] uppercase">
          Zx7 Speaker
        </h3>
        <button className="btn bg-transparent transition! duration-300 text-black hover:bg-black hover:text-white border!">
          See Product
        </button>
      </div>
    </div>
  );
};

import earphonesYX1 from "../../assets/products/single-products/earphones.png";
import PopularProducts from "../../shared/ShowCategories";
import popularProducts from "../../constants/categories";
const Product3Card = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-2.75 lg:gap-7.5">
      {/*//! Left product img */}
      <img
        data-aos="fade-right"
        src={earphonesYX1}
        alt="product-img"
        className="w-full rounded-lg md:w-[50%] h-50 md:h-80 object-cover"
      />
      {/*//! Right details */}
      <div
        data-aos="fade-left"
        className="w-full md:w-[50%] rounded-lg bg-[#F1F1F1] flex flex-col items-start justify-center gap-8 py-10.25 px-6 md:pl-10.25 lg:pl-23.75 "
      >
        <h3 className="text-[28px] font-bold leading-[100%] tracking-[2px] uppercase">
          YX1 Earphones
        </h3>
        <button className="btn bg-transparent transition! duration-300 text-black hover:bg-black hover:text-white border!">
          See Product
        </button>
      </div>
    </div>
  );
};
