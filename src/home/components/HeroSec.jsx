import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

export default function HeroSec() {
  return (
    <section className="relative bg-[#131313]">
      <div className="container flex justify-between items-center p-0!">
        {/*//! Left text */}
        <div
          data-aos="fade-right"
          className="z-10 flex flex-col items-center lg:items-start gap-6 text-center lg:text-start w-94.75 max-w-full lg:w-99.5 absolute top-27 md:top-31.5 left-[50%] translate-x-[-50%] lg:static lg:translate-0"
        >
          <p className="font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-white/50">
            New Product
          </p>
          <h1 className="font-bold text-[36px] md:text-[56px] leading-10 md:leading-14.5 tracking-[2px] uppercase text-white">
            XX99 MARK II Headphones
          </h1>
          <p className="font-normal text-[15px] leading-6.25 text-white/75 px-3.75 lg:px-0 lg:pr-12.25">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/product-details/xx99-mark-ii"
            className="btn mt-4 bg-[#d87d4a]"
          >
            See Product
          </Link>
        </div>
        {/*//! Right Image */}
        <img
          className="-mt-23.5 object-cover w-full h-156.75 md:h-auto lg:w-150 xl:w-auto z-1 opacity-50 lg:opacity-100"
          src={heroImg}
          alt="hero-img"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
}
