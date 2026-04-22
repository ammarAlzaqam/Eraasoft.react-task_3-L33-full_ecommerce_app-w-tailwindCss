import clsx from "clsx";
import ORDER_STATUS, {
  statusColors,
  statusIcons,
  statusList,
} from "../../constants/orderState";
import useOrders from "../../utilities/zustand/useOrders";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";

export default function OrdersManagement() {
  const orders = useOrders((state) => state.orders);
  const removeOrder = useOrders((state) => state.removeOrder);

  const updateOrderState = useOrders((state) => state.updateOrderState);

  return (
    <div
      className="bg-white shadow rounded-lg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/*//! Head */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg sm:text-xl font-bold p-4 pt-6 md:p-8 pb-4 border-b border-black/10">
          Orders Management
        </h2>
        {/* //! Status */}
        <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4">
          {/*//! State */}
          {statusList.map(({ name }) => {
            const colors = statusColors[name];
            const Icon = statusIcons[name];
            return (
              <div
                key={name}
                className={`px-4 py-2 rounded-lg flex ${colors.bg2} items-center justify-between gap-10`}
              >
                {/* state => Icon, name */}
                <div className="flex items-center gap-2">
                  <Icon className={`${colors.text} text-[24px]`} />
                  <span
                    className={clsx(
                      "font-medium text-lg capitalize",
                      name !== ORDER_STATUS.PENDING && colors.text,
                    )}
                  >
                    {name}
                  </span>
                </div>
                {/* state => count */}
                <p className="font-medium text-xl">
                  {orders.filter((or) => or.state === name).length}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/*//! Products Table */}
      <div className="py-4 px-4 md:px-8">
        <div className="overflow-x-auto rounded-box border border-[#f0f3f7] shadow-lg shadow-[#f0f3f7]">
          <table className="table align-middle">
            {/* head */}
            <thead>
              <tr className="bg-[#f0f3f7] text-[#475671] text-xs md:text-[16px]">
                <th className="hidden lg:table-cell">No</th>
                <th className="hidden sm:table-cell">Order ID</th>
                <th className="table-cell sm:hidden">ID</th>
                <th className="hidden sm:table-cell">Status</th>
                <th className="table-cell sm:hidden">St</th>
                <th>Total</th>
                <th className="hidden sm:table-cell">Actions</th>
                <th className="table-cell sm:hidden">Ac</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((or, i) => {
                const colors = statusColors[or.state];

                const changeOrderState = (e) => {
                  const newState = e.target.value;
                  updateOrderState(or.id, newState);
                  toast.success("Status updated successfully");
                };

                return (
                  <tr key={or.id}>
                    <th className="hidden lg:table-cell">{i + 1}</th>
                    <td>
                      <h3 className="font-bold text-[10px] sm:text-xs md:text-[16px] w-8 sm:w-15 lg:w-50 line-clamp-1">
                        {or.id}
                      </h3>
                    </td>
                    <td className="font-semibold capitalize text-[16px]">
                      <button
                        className={`px-2 lg:px-5 py-1.5 rounded-md ${colors.badge} flex items-center gap-2`}
                      >
                        <div className="inline-grid *:[grid-area:1/1]">
                          {or.state === ORDER_STATUS.PENDING && (
                            <div
                              className={`status ${colors.statusColor} animate-ping`}
                            ></div>
                          )}
                          <div className={`status ${colors.statusColor}`}></div>
                        </div>
                        <span className="font-semibold hidden lg:block">
                          {or.state}
                        </span>
                      </button>
                    </td>
                    <td className="font-bold text-[10px] sm:text-xs md:text-[1rem] max-w-15 sm:max-w-fit line-clamp-1">
                      <span className="hidden sm:inline-block">$</span>
                      {or.grandTotal.toLocaleString()}
                    </td>
                    <td>
                      <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-2">
                        {/* <button className="bg-[#eef2f7] text-[#3d4f69] text-[12px] sm:text-[16px] font-bold border border-[#3d4f69]/20 cursor-pointer rounded-md shadow flex items-center gap-2 px-2 sm:px-3.5 py-1.5 transition duration-300 hover:bg-[#3d4f69] hover:text-white">
                          <BsFillPencilFill />
                          <span className="hidden md:inline-block">Edit</span>
                        </button> */}
                        <select
                          className="select bg-white text-black max-w-fit pr-8"
                          onChange={changeOrderState}
                        >
                          {statusList.map(({ name }) => {
                            const colors = statusColors[name];

                            return (
                              <option value={name} selected={or.state === name}>
                                <button
                                  className={`px-2 lg:px-5 py-1.5 rounded-md ${colors.badge} flex items-center gap-2`}
                                >
                                  <div className="inline-grid *:[grid-area:1/1]">
                                    {name === ORDER_STATUS.PENDING && (
                                      <div
                                        className={`status ${colors.statusColor} animate-ping`}
                                      ></div>
                                    )}
                                    <div
                                      className={`status ${colors.statusColor}`}
                                    ></div>
                                  </div>
                                  <span className="font-semibold hidden lg:block">
                                    {name}
                                  </span>
                                </button>
                              </option>
                            );
                          })}
                        </select>
                        {or.state === ORDER_STATUS.DELIVERED && (
                          <button
                            onClick={() => removeOrder(or.id)}
                            className="bg-transparent text-red-500 text-[14px] sm:text-[20px] font-bold cursor-pointer rounded-md flex items-center gap-2 px-2 sm:px-3 py-1.5 transition duration-300 hover:bg-red-600 hover:text-white"
                          >
                            <CgClose />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
