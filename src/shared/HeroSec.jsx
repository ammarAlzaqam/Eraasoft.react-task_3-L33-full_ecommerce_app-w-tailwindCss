export default function HeroSec({ productCategory }) {
  return (
    <div className="py-24.5 bg-black flex justify-center">
      <h2 className="font-bold text-[40px] text-white uppercase leading-11 tracking-[1.43px]">
        {productCategory}
      </h2>
    </div>
  );
}
