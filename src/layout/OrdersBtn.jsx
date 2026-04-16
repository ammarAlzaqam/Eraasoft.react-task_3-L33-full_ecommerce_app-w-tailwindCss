import { BiSolidShoppingBag } from "react-icons/bi";
import useOrders from "../utilities/zustand/useOrders";
import { Link, useLocation } from "react-router-dom";

export default function OrdersBtn() {
  const orders = useOrders((state) => state.orders);
  const location = useLocation();
  const pathname = location.pathname;

  if (orders.length === 0 || pathname === "/orders") return null;

  return (
    <Link
      to="/orders"
      className="btn fixed z-100 capitalize! shadow-lg shadow-black/30 bg-[#D87D4A] transition! duration-300 hover:bg-[#e26720] hover:opacity-100! bottom-5 right-5"
    >
      <BiSolidShoppingBag className="text-xl" /> My Orders ({orders.length})
    </Link>
  );
}
