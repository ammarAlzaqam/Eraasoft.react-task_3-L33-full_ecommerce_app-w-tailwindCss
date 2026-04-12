import Logo from "../assets/header/audiophile.svg";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import links from "../constants/navLinks";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  let navLinkStyle =
    "text-white font-bold text-[13px] tracking-[1px] leading-[100%] uppercase cursor-pointer";

  return (
    <header
      className={`relative ${pathname === "/" ? "bg-[#131313]" : "bg-black"} pt-8 z-10`}
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
        <BsCart3 className="text-white text-[20px] md:absolute md:top-1 md:right-0 lg:static" />
      </div>
    </header>
  );
}
