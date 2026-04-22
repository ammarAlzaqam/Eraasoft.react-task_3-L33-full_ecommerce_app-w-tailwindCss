import { FiClock, FiCodesandbox } from "react-icons/fi";
import { TbHexagon3D } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ORDER_STATUS = {
  PENDING: "pending",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
};

export const statusColors = {
  pending: {
    bg: "bg-yellow-500/5",
    bgHover: "hover:bg-yellow-500/5",
    bg2: "bg-yellow-500/15",
    border: "border-yellow-500/50",
    badge: "bg-yellow-500/20",
    text: "text-yellow-500",
    statusColor: "status-warning",
  },
  delivered: {
    bg: "bg-green-500/5",
    bgHover: "hover:bg-green-500/5",
    bg2: "bg-green-500/15",
    border: "border-green-500/20",
    badge: "bg-green-500/20",
    text: "text-green-600",
    statusColor: "status-success",
  },
  shipped: {
    bg: "bg-blue-500/5",
    bgHover: "hover:bg-blue-500/5",
    bg2: "bg-blue-500/15",
    border: "border-blue-500/20",
    badge: "bg-blue-500/20",
    text: "text-blue-600",
    statusColor: "status-primary",
  },
};

export const statusIcons = {
  pending: FiClock,
  shipped: FiCodesandbox,
  delivered: IoMdCheckmarkCircleOutline,
};

import { PiClockClockwiseBold as PendingIcon } from "react-icons/pi";
import { FiBox as ShippedIcon } from "react-icons/fi";
import { FaCheckCircle as DeliveredIcon } from "react-icons/fa";

export const statusList = [
  { name: "pending", Icon: PendingIcon },
  { name: "shipped", Icon: ShippedIcon },
  { name: "delivered", Icon: DeliveredIcon },
];

export default ORDER_STATUS;
