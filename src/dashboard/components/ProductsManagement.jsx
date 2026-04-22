import { BsFillPencilFill } from "react-icons/bs";
import useProducts from "../../utilities/zustand/useProducts";
import { FaTrashAlt } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import AddProductModal from "./AddProductModal";

export default function ProductsManagement() {
  const products = useProducts((state) => state.products);
  const removeProduct = useProducts((state) => state.removeProduct);

  return (
    <div
      className="bg-white shadow rounded-lg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/*//! Head */}
      <div className="p-4 pt-6 md:p-8 pb-4 flex items-center justify-between border-b border-black/10">
        <h2 className="text-lg sm:text-xl font-bold">Products Management</h2>
        <button
          onClick={() => document.getElementById("product_modal").showModal()}
          className="btn text-[15px]! rounded-full! sm:rounded-lg! capitalize! w-10! sm:w-auto! h-10! py-0! px-0! sm:px-6! bg-[#D87D4A]"
        >
          <IoAdd className="text-2xl" />
          <span className="hidden sm:inline-block">Add product</span>
        </button>
      </div>
      {/*//! Products Table */}
      <div className="py-4 px-4 md:px-8">
        <div className="overflow-x-auto rounded-box border border-[#f0f3f7] shadow-lg shadow-[#f0f3f7]">
          <table className="table align-middle">
            {/* head */}
            <thead>
              <tr className="bg-[#f0f3f7] text-[#475671] text-xs md:text-[16px]">
                <th className="hidden lg:table-cell">No</th>
                <th>Product</th>
                <th className="hidden sm:table-cell">Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr>
                  <th className="hidden lg:table-cell">{i + 1}</th>
                  <td className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <div className="h-10 md:h-15 w-15 md:w-20 rounded-lg bg-[#f0f3f7] flex items-center justify-center">
                      <img
                        className="h-[70%]"
                        src={p.mainImg}
                        alt="product-img"
                      />
                    </div>
                    <h3 className="font-bold text-xs md:text-[16px] max-w-10 lg:max-w-fit line-clamp-1">
                      {p.name}
                    </h3>
                  </td>
                  <td className="hidden sm:table-cell">
                    <p className="font-semibold capitalize text-xs md:text-[16px] w-10 md:w-15 lg:w-fit line-clamp-1">
                      {p.category}
                    </p>
                  </td>
                  <td className="font-bold text-xs md:text-[1rem]">
                    $ {p.price.toLocaleString()}
                  </td>
                  <td>
                    <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-3">
                      <button className="bg-[#eef2f7] text-[#3d4f69] text-[16px] font-bold border border-[#3d4f69]/20 cursor-pointer rounded-md shadow flex items-center gap-2 px-3.5 py-1.5 transition duration-300 hover:bg-[#3d4f69] hover:text-white">
                        <BsFillPencilFill />
                        <span className="hidden lg:block">Edit</span>
                      </button>
                      <button
                        onClick={() => removeProduct(p.slug)}
                        className="bg-red-500/90 text-white text-[16px] font-bold cursor-pointer rounded-md flex items-center gap-2 px-4 py-1.5 transition duration-300 hover:bg-red-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/*//! Add Product Modal */}
      <AddProductModal />
    </div>
  );
}
