import useOrders from "../../utilities/zustand/useOrders";
import { BiTrash } from "react-icons/bi";
import { HiCalendarDays } from "react-icons/hi2";
import formatDate from "../../utilities/formatDate";
import clsx from "clsx";
import ORDER_STATUS, {
  statusColors,
  statusIcons,
} from "../../constants/orderState";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function DetailsModal() {
  const orders = useOrders((state) => state.orders);

  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");

  const order = orders.find((or) => or.id === orderId);

  const colors = order ? statusColors[order.state] : null;
  const Icon = order ? statusIcons[order.state] : null;

  useEffect(() => {
    if (orderId) {
      document.getElementById("details_modal")?.showModal();
    }
  }, [orderId]);

  if (!order) return null;

  return (
    <dialog id="details_modal" className="modal">
      <div className="modal-box max-w-full bg-white p-0 rounded-xl">
        <div
          className={clsx(
            `${colors.bg} shadow-xl rounded-xl p-4`,
            order.state === ORDER_STATUS.PENDING
              ? `border-2 ${colors.border}`
              : `border ${colors.border}`,
          )}
        >
          {/*//! Head */}
          <div className="flex items-start md:items-center justify-between gap-4 pb-2 border-b border-black/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-10">
              <h3 className="font-semibold text-[15px] xl:max-w-full">
                Order #{order.id}
              </h3>
              <div className="text-sm text-black/60 flex items-center gap-1">
                <HiCalendarDays className="text-lg" />
                <p className="line-clamp-1">{formatDate(order.createdAt)}</p>
              </div>
            </div>
            <div
              className={`font-semibold flex items-center gap-1 md:gap-2 rounded-4xl px-3 py-1 ${colors.badge} text-black/80 capitalize`}
            >
              <Icon className={`${colors.text} md:text-lg`} />
              <span
                className={clsx(
                  "text-sm md:text-[16px]",
                  order.state === ORDER_STATUS.SHIPPED && colors.text,
                  order.state === ORDER_STATUS.DELIVERED && colors.text,
                )}
              >
                {order.state}
              </span>
            </div>
          </div>
          {/*//! Products data */}
          <div className="mt-5 flex justify-center flex-wrap items-center w-full gap-8 overflow-hidden">
            {order.products.map((p, i) => (
              <div
                className="flex flex-col items-center text-center gap-4"
                key={p.slug}
              >
                <div
                  key={p.slug}
                  className={clsx(
                    "w-24 h-24 md:shrink-0 flex items-center justify-center bg-black/10 backdrop-blur-xl rounded-lg transition-all duration-300 hover:z-10",
                  )}
                >
                  <img className="h-[80%]" src={p.mainImg} alt="product-img" />
                </div>
                <h3>
                  {p.name} {p.category}
                </h3>
              </div>
            ))}
          </div>
          {/*//! Right grandtotal & cancelBtn */}
          <div className="mt-5 flex flex-row md:flex-col md:items-end justify-between gap-2">
            <h4 className="font-bold text-[18px]">
              Grandtotal: $ {order.grandTotal.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={() => setSearchParams({})}
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
