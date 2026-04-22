import Logo from "../assets/header/audiophile.svg";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import links from "../constants/navLinks";
import CartModal from "./CartModal";
import { useEffect, useState } from "react";
import useCart from "../utilities/zustand/useCart";
import { FiShoppingCart } from "react-icons/fi";
import clsx from "clsx";
import SideBar from "./SideBar";
import { LuLayoutDashboard } from "react-icons/lu";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const cart = useCart((state) => state.cart);

  const navigate = useNavigate();

  const [openCart, setOpenCart] = useState(false);
  const [openAside, setOpenAside] = useState(false);

  let navLinkStyle =
    "text-white font-bold text-[13px] tracking-[1px] leading-[100%] uppercase cursor-pointer";

  return (
    <>
      <header
        className={`sticky top-0 ${pathname === "/" ? "bg-[#131313]" : "bg-black"} pt-8 z-200`}
      >
        <div
          data-aos="fade-down"
          className="relative z-20 container pb-8 flex items-center justify-between md:justify-start lg:justify-between gap-6 sm:gap-10.5 border-b border-white/20"
        >
          {/*//! Menu Btn  */}
          <MenuBtn openAside={openAside} setOpenAside={setOpenAside} />
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo-Img"
            className="cursor-pointer"
          />
          {/*//! Links */}
          <nav className="hidden lg:flex gap-8.5">
            {links.map((link) => (
              <Link
                className={`link ${((pathname.includes(link.route) && link.route !== "/") || pathname === link.route) && "active"} ${navLinkStyle}`}
                to={link.route}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/*//! Icons (Dashboard, Cart)  */}
          <div
            className={clsx(
              "relative md:absolute md:top-2 md:right-0 lg:relative lg:top-0 transition-transform duration-300",
              "flex items-center gap-3",
              cart.length > 0 && "mr-3",
            )}
          >
            <LuLayoutDashboard
              onClick={() => navigate("/dashboard")}
              className="text-white text-[24px] cursor-pointer transition duration-300 hover:text-[#D87D4A]"
            />
            <FiShoppingCart
              onClick={() => setOpenCart((prev) => !prev)}
              className="text-white text-[24px] cursor-pointer transition duration-300 hover:text-[#D87D4A]"
            />

            {cart.length > 0 && (
              <div className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-[#D87D4A] flex items-center justify-center pointer-events-none">
                <span className="text-white text-sm animate">
                  {cart.length}
                </span>
              </div>
            )}
          </div>
        </div>
        <SideBar openAside={openAside} setOpenAside={setOpenAside} />
      </header>
      <CartModal openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}

const MenuBtn = ({ openAside, setOpenAside }) => {
  return (
    <label className="grid bg-transparent! lg:hidden btn btn-circle swap swap-rotate p-0! rounded-full!">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={openAside}
        onChange={() => setOpenAside((prev) => !prev)}
      />

      {/* hamburger icon */}
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* close icon */}
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};
