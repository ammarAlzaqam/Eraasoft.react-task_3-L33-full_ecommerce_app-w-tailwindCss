import clsx from "clsx";
import ShowCategories from "../shared/ShowCategories";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { IoHome } from "react-icons/io5";

export default function SideBar({ setOpenAside, openAside }) {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => setOpenAside(false), [pathname]);
  return (
    <aside
      onClick={() => setOpenAside(false)}
      className={clsx(
        openAside ? "opacity-100" : "opacity-0 pointer-events-none",
        "absolute z-10 top-0 left-0 h-[calc(100dvh - 109px)] h-dvh bg-black/50 w-full transition duration-300",
      )}
    >
      <div
        className="mt-26.25 overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={clsx(
            openAside ? "translate-y-0" : "-translate-y-10",
            "bg-white transition-transform duration-400",
          )}
        >
          {/*//! Home link */}
          <div className="pt-10 container">
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit transition-colors duration-300 hover:text-[#D87D4A]"
            >
              <IoHome className="transition duration-300 group-hover:text-[#D87D4A] group-hover:scale-120" />{" "}
              Home
            </Link>
          </div>

          {/*//! Categories links */}
          <ShowCategories
            type="sideBar"
            className="pb-15 lg:pb-20 pt-20! lg:pt-32.5! flex-row! gap-7.5!"
          />
        </div>
      </div>
    </aside>
  );
}
