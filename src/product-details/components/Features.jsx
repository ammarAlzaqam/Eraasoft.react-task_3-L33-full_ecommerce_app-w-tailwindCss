export default function Features({ features, inTheBox }) {
  return (
    <div className="container mt-40 flex flex-col lg:flex-row gap-22 md:gap-31.25">
      {/*//! Left features */}
      <div className="lg:w-[60%] flex flex-col gap-8">
        <h2 className="text-[32px] font-bold leading-9 tracking-[1.14px] uppercase">
          Features
        </h2>
        {features.map((f) => (
          <p className="text-[15px] text-black/50 leading-6.25">{f}</p>
        ))}
      </div>
      {/*//! Right In the box */}
      <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-3 lg:gap-8 shrink-0">
        <h2 className="w-auto md:w-[50%] lg:w-auto text-[32px] font-bold leading-9 tracking-[1.14px] uppercase">
          In the box
        </h2>
        <ul className="flex flex-col gap-2">
          {inTheBox.map((e) => (
            <li className="flex items-center gap-6">
              <p className="text-[15px] text-[#D87D4A] font-bold leading-6.25">
                {e.count}x
              </p>
              <p className="text-[15px] text-black/50 font-bold leading-6.25 capitalize">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
