import { useEffect, useState } from "react";
import useOrders from "../utilities/zustand/useOrders";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import clsx from "clsx";
import ORDER_STATUS from "../constants/orderState";
import OrderStatus from "./components/OrderStatus";
import ProductCard from "./components/ProductCard";
import DetailsModal from "./components/DetailsModal";

export default function OrdersPage() {
  const [sortType, setSortType] = useState("newest");
  const [status, setStatus] = useState("all");

  const orders = useOrders((state) => state.orders);

  const sortedOrders = [...orders].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  const categoriesOrders =
    status === "all"
      ? sortedOrders
      : sortedOrders.filter((or) => or.state === status);

  const pendingOrders = orders.filter(
    (or) => or.state === ORDER_STATUS.PENDING,
  );

  const clearPendingOrders = useOrders((state) => state.clearPendingOrders);

  const navigate = useNavigate();

  useEffect(() => {
    if (orders.length === 0) {
      navigate("/", { replace: true });
    }
  }, [orders]);

  if (orders.length === 0) return null;

  return (
    <section className="pt-10">
      <div className="container">
        {/*//! Head */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          {/*//! Left text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">My Orders</h2>
            <p className="text-sm text-black/50">
              Track and manage all your orders
            </p>
          </div>
          {/*//! Right buttons */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-4 md:gap-8">
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="select pr-14 pl-5 select-ghost rounded-xl h-8 bg-white shadow text-sm text-black/70 border-none!"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </select>
            <button
              onClick={() => clearPendingOrders()}
              disabled={pendingOrders.length === 0}
              className={clsx(
                "btn btn-outline btn-error py-3! border! transition! rounded-lg! duration-300! bg-transparent text-red-500 capitalize! hover:bg-red-500 hover:text-white",
                pendingOrders.length < 1 && "border-gray-500! text-gray-500!",
              )}
            >
              <BiTrash className="text-lg" />
              Cancel All Pending ({pendingOrders.length})
            </button>
          </div>
        </div>
        {/*//! Orders & Status  */}
        <div className="flex flex-col-reverse lg:flex-row items-start gap-8 mt-8">
          {/*//! Left orders */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/*//! Product Card */}
            {categoriesOrders.map((order) => (
              <ProductCard key={order.id} order={order} />
            ))}
          </div>
          {/*//! Right Status */}
          <OrderStatus orders={orders} setStatus={setStatus} status={status} />
        </div>
      </div>
      <DetailsModal />
    </section>
  );
}
