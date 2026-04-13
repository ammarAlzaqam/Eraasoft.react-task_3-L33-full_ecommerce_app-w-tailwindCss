import { BsDash } from "react-icons/bs";
import products from "../constants/products";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function CartModal({ openCart, setOpenCart }) {
  const cartProducts = products.filter(
    (p) => p.category.toLowerCase() === "headphones",
  );

  return (
    <div
      onClick={() => setOpenCart(false)}
      className={clsx(
        openCart
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        "fixed z-40 top-0 left-0 w-full h-dvh border-4 bg-black/50 transition duration-300",
      )}
    >
      <div className="container flex justify-end pt-30">
        {/*//! Cart */}
        <div className="overflow-hidden">
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              openCart
                ? "translate-y-0 scale-x-100"
                : "-translate-y-10 scale-x-110",
              "w-94.25 bg-white rounded-lg p-8 shadow-xl flex flex-col transition duration-500",
            )}
          >
            {/*//! Top head */}
            <div className="flex justify-between item-center">
              <h3 className="font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase">
                Cart ({cartProducts.length})
              </h3>
              <p className="text-black/50 text-[15px] leading-6.25 underline cursor-pointer transition hover:text-red-800 hover:scale-y-120">
                Remove all
              </p>
            </div>
            {/*//! Mid all products */}
            <div className="py-8 flex flex-col gap-6">
              {/*//! Product box */}
              {cartProducts.map((p) => (
                <div className="flex justify-between items-center">
                  {/*//! Product Left details */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#f1f1f1] rounded-lg flex items-center justify-center">
                      <img
                        className="h-[70%]"
                        src={p.mainImg}
                        alt="product-img"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-[15px] leading-6.25 uppercase">
                        {p.name}
                      </h3>
                      {/*//TODO>> price * count */}
                      <p className="font-bold text-[14px] leading-6.25">
                        $ {p.price}
                      </p>
                    </div>
                  </div>
                  {/*//! Product Right count */}
                  <div className="w-24 h-8 bg-[#F1F1F1] text-black flex items-center justify-center gap-5 cursor-auto">
                    <BsDash className="text-[16px] text-black/25 cursor-pointer transition duration-300 hover:text-red-500 hover:scale-125" />
                    <span className="font-bold text-[13px] leading-[100%] tracking-[1px]">
                      1
                    </span>
                    <BiPlus className="text-[16px] text-black/25 cursor-pointer transition duration-300 hover:text-green-500 hover:scale-125" />
                  </div>
                </div>
              ))}
            </div>
            {/*//! Total */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[15px] text-black/50 leading-6.25 uppercase">
                Total
              </p>
              {/*//TODO>> Calc total price */}
              <h3 className="font-bold text-[18px] leading-[100%]">$ 5,396</h3>
            </div>
            {/*//! Bottom checkout btn */}
            <Link className="btn bg-[#D87D4A]" to="#">
              checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
