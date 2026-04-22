import { useId, useState } from "react";
import logoImg from "../../assets/header/audiophile.svg";
import clsx from "clsx";
import DashboardLinks from "../../constants/DashboardLinks";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function AsideBar({ link, setLink }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed z-400 lg:sticky bottom-0 lg:top-0 left-0 lg:h-dvh bg-[#2f3c4e]/90 lg:bg-[#2f3c4e] backdrop-blur-xs w-full lg:w-40 lg:border-r-2 rounded-tr-full rounded-tl-full lg:rounded-none border-black/50 md:shadow-xl shadow-black">
      <Link to="/" className="p-5 border-b border-white/50 hidden lg:block">
        <img src={logoImg} alt="logo-img" />
      </Link>
      <div className="py-3 lg:py-6 px-4 flex flex-row lg:flex-col items-center lg:items-stretch justify-center gap-6">
        <Link
          className="w-fit px-6 py-4 lg:px-4 lg:pb-6 lg:mb-4 border-r lg:border-r-0 lg:border-b border-[#5d6878] lg:rounded-sm flex lg:mx-auto cursor-pointer transition duration-300 hover:border-white"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          to="/"
        >
          <ModernIcon Icon={HiHome} scale={true} hover={hover} />
        </Link>
        {DashboardLinks.map(({ Icon, name }) => {
          const [hover, setHover] = useState(false);

          return (
            <div
              className={clsx(
                "flex flex-col md:gap-2 items-center cursor-pointer group rounded-md p-3 transition-all duration-300 md:w-25 lg:w-auto",

                link === name &&
                  "bg-[#D87D4A]/70 shadow-lg shadow-[#D87D4A]/30",
              )}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setLink(name)}
            >
              <ModernIcon Icon={Icon} hover={hover} active={link === name} />
              <h3
                className={clsx(
                  "text-sm font-bold leading-[100%] text-[#8897b3] capitalize transition duration-300 group-hover:text-white hidden md:block",
                  link === name && "text-white",
                )}
              >
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ModernIcon = ({ Icon, scale = false, hover, active = false }) => {
  const id = useId();

  return (
    <div className="cursor-pointer">
      <Icon
        className={clsx("text-2xl sm:text-3xl", scale && "scale-x-120")}
        style={{
          fill: `url(#${id})`,
        }}
      />

      <svg width="0" height="0">
        <defs>
          <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="20%"
              stopColor={
                hover || active ? "#ffffff" : scale ? "#a7a19e" : "#7687a6"
              }
              style={{ transition: "stop-color 0.4s ease" }}
            />
            <stop
              offset="100%"
              stopColor={
                hover || active ? "#d1d5db" : scale ? "white" : "#b0bbcf"
              }
              style={{ transition: "stop-color 0.4s ease" }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
