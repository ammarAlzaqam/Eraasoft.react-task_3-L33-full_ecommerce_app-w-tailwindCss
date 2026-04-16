import useOrders from "../../utilities/zustand/useOrders";
import { BiTrash } from "react-icons/bi";
import { HiCalendarDays } from "react-icons/hi2";
import formatDate from "../../utilities/formatDate";
import clsx from "clsx";
import ORDER_STATUS, {
  statusColors,
  statusIcons,
} from "../../constants/orderState";
import { useNavigate } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

const ProductCard = ({ order }) => {
  const colors = statusColors[order.state];
  const Icon = statusIcons[order.state];

  const navigate = useNavigate();

  const removeOrder = useOrders((state) => state.removeOrder);

  return (
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
          <h3 className="font-semibold text-[15px] max-w-50 xl:max-w-full line-clamp-1">
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
      <div className="pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
        {/*//! Left Products Details */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          {/* products Imgs */}
          <div className="flex justify-between md:justify-start md:max-w-70 overflow-hidden">
            {order.products.map((p, i) => (
              <div
                key={p.slug}
                className={clsx(
                  "w-24 h-24 md:shrink-0 flex items-center justify-center bg-black/10 backdrop-blur-xl rounded-lg transition-all duration-300 hover:z-10",
                  i !== 0 && "-ml-14",
                )}
              >
                <img className="h-[80%]" src={p.mainImg} alt="product-img" />
              </div>
            ))}
          </div>
          {/* products Names */}
          <div className="line-clamp-2">
            {order.products.map((p) => (
              <p key={p.slug} className="text-[15px] font-bold leading-7">
                {p.name} {p.category} <span className="px-2"> x{p.count}</span>
              </p>
            ))}
          </div>
        </div>
        {/*//! Right grandtotal & cancelBtn */}
        <div className="flex flex-row md:flex-col md:items-end justify-between gap-2">
          <h4 className="font-bold text-[18px]">
            $ {order.grandTotal.toLocaleString()}
          </h4>
          {order.state === ORDER_STATUS.PENDING ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigate(`?orderId=${order.id}`);
                }}
                className="btn btn-outline btn-error py-0! h-9 px-5! border! transition! rounded-lg! duration-300! bg-transparent text-blue-500 capitalize! hover:bg-blue-500 hover:text-white"
              >
                <BsEyeFill className="text-lg" />
                <span className="hidden xl:inline">View Details</span>
              </button>
              <button
                onClick={() => removeOrder(order.id)}
                className="btn btn-outline btn-error py-0! h-9 px-5! border! transition! rounded-lg! duration-300! bg-transparent text-red-500 capitalize! hover:bg-red-500 hover:text-white"
              >
                <BiTrash className="text-lg" />
                <span className="hidden xl:inline">Cancel Order</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate(`?orderId=${order.id}`);
              }}
              className="btn btn-outline py-0! h-9 px-5! border! border-black/20! transition! rounded-lg! duration-300! bg-transparent text-black/50 capitalize! hover:bg-black/50 hover:text-white"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
