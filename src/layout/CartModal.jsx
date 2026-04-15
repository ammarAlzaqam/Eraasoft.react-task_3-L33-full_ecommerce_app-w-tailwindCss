import { BsDash } from "react-icons/bs";
import { BiPlus, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useCart from "../utilities/zustand/useCart";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CartModal({ openCart, setOpenCart }) {
  const cart = useCart((state) => state.cart);
  const clearCart = useCart((state) => state.clearCart);

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  }, [cart]);

  useEffect(() => {
    if (openCart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openCart]);
  return (
    <div
      onClick={() => setOpenCart(false)}
      className={clsx(
        openCart
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        "fixed z-40 top-0 left-0 w-full h-dvh bg-black/40 transition duration-300 overflow-auto pb-8",
      )}
    >
      <div className="container flex justify-end pt-30">
        {/*//! Cart */}
        <div className="overflow-hidden rounded-lg shadow-xl">
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              openCart
                ? "translate-y-0 scale-x-100"
                : "-translate-y-10 scale-x-110",
              "w-94.25 max-w-full bg-white rounded-lg p-8 flex flex-col transition duration-500",
            )}
          >
            {/*//! Top head */}
            <div className="flex justify-between item-center">
              <h3 className="font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase">
                Cart ({cart?.length || 0})
              </h3>
              <p
                onClick={() => clearCart()}
                className="text-black/50 text-[15px] leading-6.25 underline cursor-pointer transition hover:text-red-800 hover:scale-y-120"
              >
                Remove all
              </p>
            </div>
            {/*//! Mid all products */}
            <div className="py-8 flex flex-col gap-6">
              {/*//! Product box */}
              {cart.length > 0 ? (
                cart.map((p) => <CartProduct key={p.slug} p={p} />)
              ) : (
                <p className="text-black/50 text-center">No products...</p>
              )}
            </div>
            {/*//! Total */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[15px] text-black/50 leading-6.25 uppercase">
                Total
              </p>
              {/*//TODO>> Calc total price */}
              <h3 className="font-bold text-[18px] leading-[100%]">
                $ {total.toLocaleString()}
              </h3>
            </div>
            {/*//! Bottom checkout btn */}
            <Link
              className={clsx(
                cart.length === 0 &&
                  "pointer-event-none cursor-not-allowed bg-gray-500 opacity-70 hover:opacity-70!",
                "btn bg-[#D87D4A]",
              )}
              to="/checkout"
              onClick={() => setOpenCart(false)}
            >
              checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartProduct = ({ p }) => {
  const [animation, setAnimation] = useState("");

  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const count = p?.count || 0;

  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count > prevCountRef.current) {
      setAnimation("animate-pop-up-green");
    } else if (count < prevCountRef.current) {
      setAnimation("animate-pop-down-red");
    }

    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="flex justify-between items-center">
      {/*//! Product Left details */}
      <div className="flex items-center gap-4">
        {/*// Img */}
        <div className="relative w-16 h-16 bg-[#f1f1f1] rounded-lg flex items-center justify-center group">
          <img className="h-[70%]" src={p.mainImg} alt="product-img" />
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-1/2 flex items-center justify-center bg-black/70 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <BiTrash
              onClick={() => removeFromCart(p.slug)}
              className="text-[22px] text-red-500 transition-transform duration-300 cursor-pointer hover:scale-125"
            />
          </div>
        </div>
        {/*// Name and price */}
        <div className="flex flex-col">
          <h3 className="font-bold text-[15px] leading-6.25 uppercase">
            {p.name}
          </h3>
          {/*//TODO>> price * count */}
          <p className="font-bold text-[14px] text-black/50 leading-6.25">
            $ {p.price.toLocaleString()}
          </p>
        </div>
      </div>
      {/*//! Product Right count */}
      <div className="w-24 h-8 bg-[#F1F1F1] text-black flex items-center justify-center gap-5 cursor-auto">
        <BsDash
          onClick={() => decrement(p.slug)}
          className={clsx(
            count
              ? "cursor-pointer transition duration-300 hover:text-red-500 hover:scale-125"
              : "cursor-not-allowed",
            "text-[16px] text-black/25",
          )}
        />
        <span
          key={count}
          className={clsx(
            animation,
            "font-bold text-[13px] tracking-[1px] inline-block select-none",
          )}
        >
          {count}
        </span>
        <BiPlus
          onClick={() => increment(p.slug)}
          className={clsx(
            count
              ? "cursor-pointer transition duration-300 hover:text-green-500 hover:scale-125"
              : "cursor-not-allowed",
            "text-[16px] text-black/25",
          )}
        />
      </div>
    </div>
  );
};
