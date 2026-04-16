import Logo from "../assets/header/audiophile.svg";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import links from "../constants/navLinks";
import CartModal from "./CartModal";
import { useState } from "react";
import useCart from "../utilities/zustand/useCart";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const cart = useCart((state) => state.cart);

  const [openCart, setOpenCart] = useState(false);

  let navLinkStyle =
    "text-white font-bold text-[13px] tracking-[1px] leading-[100%] uppercase cursor-pointer";

  return (
    <>
      <header
        className={`sticky top-0 ${pathname === "/" ? "bg-[#131313]" : "bg-black"} pt-8 z-50`}
      >
        <div
          data-aos="fade-down"
          className="relative container bg-[url(https://cdn.pixabay.com/photo/2025/04/02/18/48/background-9509852_1280.jpg)_center/cover] pb-8 md:pb-9 flex items-center justify-between md:justify-start lg:justify-between gap-10.5 border-b border-white/20"
        >
          <IoMenu className="text-white flex md: lg:hidden text-[24px]" />
          <img src={Logo} alt="Logo-Img" />
          <nav className="hidden md: lg:flex gap-8.5">
            $
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
          <div className="relative">
            <FiShoppingCart
              onClick={() => setOpenCart((prev) => !prev)}
              className="text-white text-[24px] md:absolute md:top-1 md:right-0 lg:static cursor-pointer transition duration-300 hover:text-[#D87D4A]"
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
      </header>
      <CartModal openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}
