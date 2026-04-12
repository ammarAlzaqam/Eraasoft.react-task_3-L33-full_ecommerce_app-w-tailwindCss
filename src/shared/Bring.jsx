import bringImg from "../assets/bringImg.png";

export default function Bring() {
  return (
    <section className="pt-50">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-15.75 lg:gap-31.25 text-center lg:text-start">
        {/*//! Left text */}
        <div
          data-aos="flip-down"
          className="flex flex-col gap-8 w-full md:w-143.25 lg:w-auto"
        >
          <h2 className="text-[28px] md:text-[40px] font-bold leading-11 tracking-[1.5px] uppercase">
            Bringing you the <span className="text-[#d87d4a]">best</span> audio
            gear
          </h2>
          <p className="font-normal text-[15px] leading-6.25 text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        {/*//! Right img */}
        <img
          data-aos="zoom-out"
          src={bringImg}
          alt="bring-img"
          className="w-full lg:w-[50%] md:h-75 lg:h-auto aspect-10/9 lg:aspect-square xl:aspect-12/9 object-cover object-top-left grayscale"
        />
      </div>
    </section>
  );
}
