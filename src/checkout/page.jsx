import { useEffect, useState } from "react";
import GoBack from "../shared/GoBack";
import clsx from "clsx";
import useCart from "../utilities/zustand/useCart";
import { Link, useNavigate } from "react-router-dom";
import useOrders from "../utilities/zustand/useOrders";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const navigate = useNavigate();

  const cart = useCart((state) => state.cart);

  let total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  let shipping = 50;
  let vat = (20 / 100) * total;
  let finalPrice = total + vat;
  let grandtotal = finalPrice + shipping;

  const inputStyle =
    "w-full bg-transparent border border-[#CFCFCF] font-bold text-[14px] leading-[100%] tracking-[-0.25px] py-4.5 px-6 rounded-lg transition duration-300 focus:border-[#D87D4A] focus:outline-0 placeholder:text-black/40";

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/", { replace: true });
    }
  }, [cart]);

  if (cart.length === 0) return null;

  return (
    <section className="">
      <div className="container">
        <GoBack />
        {/* //! Checkout and summary */}
        <main className="grid grid-cols-2 lg:grid-cols-3 gap-7.5 mt-9.5">
          {/*//! Checkout */}
          <div className="col-span-2 p-6 pb-12 md:p-7.5 md:pb-10 lg:p-12 lg:pt-13.5 bg-white rounded-lg shadow-xl shadow-black/5 flex flex-col gap-8 md:gap-10.25">
            <h2 className="font-bold text-[28px] md:text-[32px] leading-[100%] md:leading-9 tracking-[1px] md:tracking-[1.14px] uppercase">
              checkout
            </h2>
            {/*//! Form */}
            <form
              id="checkoutForm"
              className="flex flex-col gap-8 md:gap-16"
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("my_modal_2").showModal();
              }}
            >
              {/*//! Details */}
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[13px] text-[#D87D4A] leading-6.25 tracking-[0.93px] uppercase">
                  Billing Details
                </p>
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="Alexei Ward"
                    />
                  </div>
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputStyle}
                      placeholder="alexei@mail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>
              </div>
              {/*//! Shipping info */}
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[13px] text-[#D87D4A] leading-6.25 tracking-[0.93px] uppercase">
                  shipping info
                </p>
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div className="col-span-1 md:col-span-2 flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="1137 Williams Avenue"
                    />
                  </div>
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="code"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="code"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="10001"
                    />
                  </div>
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="New York"
                    />
                  </div>
                  <div className="flex flex-col gap-2.25">
                    <label
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>
              {/*//! Payment details */}
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[13px] text-[#D87D4A] leading-6.25 tracking-[0.93px] uppercase">
                  payment details
                </p>
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-6">
                  <p className="md:row-span-2 font-bold text-[12px] leading-[100%] tracking-[-0.21px]">
                    Payment Method
                  </p>
                  {/* 2 radio buttons */}
                  <label
                    htmlFor="e-money"
                    className={clsx(
                      inputStyle,
                      paymentMethod === "e-Money" && "border-[#D87D4A]",
                      `flex items-center gap-4 cursor-pointer transition duration-300 hover:border-[#D87D4A]`,
                    )}
                  >
                    <input
                      id="e-money"
                      type="radio"
                      required
                      value="e-Money"
                      checked={paymentMethod === "e-Money"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="radio bg-transparent text-[#D87D4A]"
                    />
                    <label
                      htmlFor="e-money"
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                    >
                      e-Money
                    </label>
                  </label>
                  <label
                    htmlFor="Cash on Delivery"
                    className={clsx(
                      inputStyle,
                      paymentMethod === "Cash on Delivery" &&
                        "border-[#D87D4A]",
                      `flex items-center gap-4 cursor-pointer transition duration-300 hover:border-[#D87D4A]`,
                    )}
                  >
                    <input
                      id="Cash on Delivery"
                      type="radio"
                      required
                      value="Cash on Delivery"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="radio bg-transparent text-[#D87D4A]"
                    />
                    <label
                      htmlFor="Cash on Delivery"
                      className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                    >
                      Cash on Delivery
                    </label>
                  </label>
                  <div className="relative md:col-span-2 mt-4 md:mt-0">
                    <div
                      className={clsx(
                        paymentMethod === "e-Money"
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none",
                        "absolute w-full top-0 flex flex-col md:flex-row gap-4 transition duration-300",
                      )}
                    >
                      <div className="flex flex-col grow gap-2.25">
                        <label
                          className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                          htmlFor="e-Money Number"
                        >
                          e-Money Number
                        </label>
                        <input
                          id="e-Money Number"
                          type="text"
                          required={paymentMethod === "e-Money"}
                          className={inputStyle}
                          placeholder="238521993"
                        />
                      </div>
                      <div className="flex flex-col grow gap-2.25">
                        <label
                          className="font-bold text-[12px] leading-[100%] tracking-[-0,21px]"
                          htmlFor="e-Money PIN"
                        >
                          e-Money PIN
                        </label>
                        <input
                          id="e-Money PIN"
                          type="text"
                          required={paymentMethod === "e-Money"}
                          className={inputStyle}
                          placeholder="6891"
                        />
                      </div>
                    </div>
                    <div
                      className={clsx(
                        paymentMethod === "Cash on Delivery"
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none",
                        "flex flex-col md:flex-row items-center gap-4 md:gap-8 transition duration-300 text-center md:text-start",
                      )}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                          fill="#D87D4A"
                        />
                      </svg>
                      <p className="text-[15px] text-black/50 leading-6.25">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*//! Summary */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8 h-fit p-8 rounded-lg bg-white shadow-xl shadow-black/5">
            <h2 className="font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase">
              Summary
            </h2>
            {/*//! Cart Product */}
            <div className="flex flex-col gap-6">
              {cart.map((p) => (
                <CartProduct key={p.slug} p={p} />
              ))}
            </div>
            <Receipt
              finalPrice={finalPrice}
              shipping={shipping}
              vat={vat}
              grandtotal={grandtotal}
            />
            <button form="checkoutForm" className="btn bg-[#D87D4A]">
              continue
            </button>
            <CheckoutModal cart={cart} grandtotal={grandtotal} />
          </div>
        </main>
      </div>
    </section>
  );
}

const CartProduct = ({ p, className }) => (
  <div className={clsx("flex justify-between items-center", className)}>
    <div className="flex items-center gap-4 w-full">
      {/*//! Product Left Img */}
      <div className="w-16 h-16 bg-[#f1f1f1] rounded-lg flex items-center justify-center group">
        <img className="h-[70%]" src={p.mainImg} alt="product-img" />
      </div>
      {/*//! Product Right count */}
      <div className="flex justify-between grow">
        <div className="flex flex-col">
          <h3 className="font-bold text-[15px] leading-6.25 uppercase">
            {p.name}
          </h3>
          {/*//TODO>> price * count */}
          <p className="font-bold text-[14px] text-black/50 leading-6.25">
            $ {p.price.toLocaleString()}
          </p>
        </div>
        <span className="font-bold text-[15px] text-black/50 leading-6.25">
          x{p.count}
        </span>
      </div>
    </div>
  </div>
);

const Receipt = ({ finalPrice, shipping, vat, grandtotal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-black/50 text-[15px] leading-6.25 uppercase">
          total
        </p>
        <span className="font-bold text-[18px] leading-[100%]">
          $ {finalPrice.toLocaleString()}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-black/50 text-[15px] leading-6.25 uppercase">
          shipping
        </p>
        <span className="font-bold text-[18px] leading-[100%]">
          $ {shipping}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-black/50 text-[15px] leading-6.25 uppercase">
          VAT (INCLUDED)
        </p>
        <span className="font-bold text-[18px] leading-[100%]">
          $ {vat.toLocaleString()}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-black/50 text-[15px] leading-6.25 uppercase">
          GRAND TOTAL
        </p>
        <span className="font-bold text-[18px] text-[#D87D4A] leading-[100%]">
          $ {grandtotal.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

const CheckoutModal = ({ cart, grandtotal }) => {
  const [viewAll, setViewAll] = useState(false);

  const clearCart = useCart((state) => state.clearCart);
  const addOrder = useOrders((state) => state.addOrder);

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box rounded-lg bg-white max-w-135 max-h-[95%] p-12 flex flex-col">
        <div className="shrink-0 w-16 h-16 rounded-full bg-[#D87D4A] flex items-center justify-center">
          <svg
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41406 10.4658L8.16558 17.2173L23.9687 1.41422"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>
        <h2 className="mt-8 font-bold text-[32px] leading-9 tracking-[1.14px] uppercase">
          Thank you <br /> for your order
        </h2>
        <p className="mt-6 text-[15px] text-black/50 leading-6.25"></p>
        {/*//! All Details */}
        <div className="mt-8 flex flex-wrap">
          <div className="w-full md:w-41/74 bg-[#F1F1F1] p-6 rounded-tr-lg md:rounded-bl-lg rounded-tl-lg flex flex-col gap-3">
            {/* cart products */}
            <div
              className={clsx(
                viewAll ? "gap-4" : "gap-0",
                "flex flex-col pb-4 border-b border-black/8",
              )}
            >
              <CartProduct p={cart[0]} />
              {cart
                .filter((_, i) => i !== 0)
                .map((p) => (
                  <CartProduct
                    className={clsx(
                      viewAll
                        ? "max-h-96 scale-y-100 opacity-100"
                        : "max-h-0 scale-y-0 opacity-0",
                      "overflow-hidden transition-all duration-300",
                    )}
                    key={p.slug}
                    p={p}
                  />
                ))}
            </div>
            <p
              onClick={() =>
                setViewAll((prev) => (cart.length === 1 ? prev : !prev))
              }
              className={clsx(
                cart.length !== 1
                  ? viewAll
                    ? "hover:text-red-400 hover:scale-x-90"
                    : "hover:text-green-400 hover:scale-x-110"
                  : "",
                "font-bold text-[12px] text-center text-black/50 leading-[100%] tracking-[-0,21px] capitalize cursor-pointer select-none transition duration-300",
              )}
            >
              {cart.length === 1
                ? "only one item"
                : viewAll
                  ? "View Less"
                  : `and ${cart.length - 1} other item(s)`}
            </p>
          </div>
          <div className="p-8 flex grow flex-col justify-center gap-2 bg-black rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg">
            <p className="text-white/50 text-[15px] uppercase leading-6.25">
              grand total
            </p>
            <h2 className="font-bold text-white text-[18px] leading-100%]">
              $ {grandtotal.toLocaleString()}
            </h2>
          </div>
        </div>
        <button
          onClick={() => {
            clearCart();
            addOrder(cart);
            scrollTo(0, 0);
          }}
          className="mt-6 md:mt-11.5 btn bg-[#D87D4A]"
        >
          back to home
        </button>
      </div>
    </dialog>
  );
};
