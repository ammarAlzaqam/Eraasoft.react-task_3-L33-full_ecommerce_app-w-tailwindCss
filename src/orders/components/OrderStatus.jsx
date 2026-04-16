import { IoIosArrowForward } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";

import clsx from "clsx";
import { statusColors, statusList } from "../../constants/orderState";

const OrderStatus = ({ orders, status, setStatus }) => {
  return (
    <div className="sticky top-26.5 z-20 w-full lg:w-auto bg-white shadow rounded-xl grow px-6 py-4">
      <details
        className="collapse collapse-arrow border border-base-300 *:p-0! border-none"
        name="my-accordion-det-1"
        open
      >
        <summary className="collapse-title font-semibold">
          <h2 className="text-2xl font-bold capitalize pb-3 border-b border-black/7">
            Order Status
          </h2>
        </summary>
        <div className="collapse-content text-sm">
          {/*//! Show all Status card */}
          <div
            onClick={() => setStatus("all")}
            className={clsx(
              `py-2 pl-2 flex items-center justify-between border-b border-black/7 cursor-pointer select-none transition duration-300 hover:bg-violet-500/5`,
              status === "all" && "bg-violet-500/5",
            )}
          >
            <div className="shrink-0 flex items-center gap-6">
              <div
                className={`h-11 w-11 rounded-full bg-violet-500/15 flex items-center justify-center`}
              >
                <TbCategory className={`text-2xl text-violet-500`} />
              </div>
              <p
                className={clsx(
                  "font-semibold capitalize transition-all duration-300",
                  status === "all" && "text-violet-500",
                )}
              >
                All Orders
              </p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <span className={clsx(status === "all" && "text-violet-500")}>
                {orders.length}
              </span>
              <IoIosArrowForward
                className={clsx(
                  "text-lg text-black/60",
                  status === "all" && "text-violet-500",
                )}
              />
            </div>
          </div>
          {/*//! Status card */}
          {statusList.map((state) => {
            const colors = statusColors[state.name];

            return (
              <div
                key={state.name}
                onClick={() => setStatus(state.name)}
                className={clsx(
                  `py-2 pl-2 flex items-center justify-between border-b border-black/7 cursor-pointer select-none transition duration-300 ${colors.bgHover}`,
                  status === state.name && colors.bg,
                )}
              >
                <div className="shrink-0 flex items-center gap-6">
                  <div
                    className={`h-11 w-11 rounded-full ${colors.bg2} flex items-center justify-center`}
                  >
                    <state.Icon className={`text-2xl ${colors.text}`} />
                  </div>
                  <p
                    className={clsx(
                      "font-semibold capitalize transition-all duration-300",
                      status === state.name && colors.text,
                    )}
                  >
                    {state.name}
                  </p>
                </div>
                <div className="flex items-center gap-4 font-semibold">
                  <span className={clsx(status === state.name && colors.text)}>
                    {
                      orders.filter((order) => order.state === state.name)
                        .length
                    }
                  </span>
                  <IoIosArrowForward
                    className={clsx(
                      "text-lg text-black/60",
                      status === state.name && colors.text,
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </details>
      <div className="pt-5 flex items-center justify-between text-sm">
        <div className="shrink-0 flex items-center gap-6">
          <div
            className={`h-11 w-11 rounded-full bg-gray-500/15 flex items-center justify-center`}
          >
            <IoDocumentTextOutline className={`text-2xl text-gray-500`} />
          </div>
          <p className="font-semibold capitalize">Total Orders</p>
        </div>
        <span className="font-semibold">{orders.length}</span>
      </div>
    </div>
  );
};

export default OrderStatus;
