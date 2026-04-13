export default function Gallery({ gallery }) {
  return (
    <div className="h-189 md:h-92 lg:h-140.5 container mt-30 lg:mt-40 grid grid-cols-5 grid-rows-4 gap-5 lg:gap-8">
      <div className="col-span-5 md:col-span-2 row-span-2 md:row-span-4 grid grid-col-1 gird-row-2 gap-5 lg:gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            data-aos="zoom-out"
            className="w-full h-full object-cover grayscale-100"
            src={gallery[0]}
            alt="gallery-img"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            data-aos="zoom-out"
            className="w-full h-full object-cover grayscale-100"
            src={gallery[1]}
            alt="gallery-img"
          />
        </div>
      </div>

      <div className="col-span-5 md:col-span-3 row-span-2 md:row-span-4 rounded-lg overflow-hidden">
        <img
          data-aos="zoom-out"
          className="w-full h-full object-cover grayscale-100"
          src={gallery[2]}
          alt="gallery-img"
        />
      </div>
    </div>
  );
}
