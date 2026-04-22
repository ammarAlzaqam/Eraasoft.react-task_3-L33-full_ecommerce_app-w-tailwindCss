import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "../../utilities/validation";
import toast from "react-hot-toast";
import slugify from "slugify";
import useProducts from "../../utilities/zustand/useProducts";

export default function AddProductModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const products = useProducts((state) => state.products);
  const addProduct = useProducts((state) => state.addProduct);

  const onSubmit = (data) => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];

    const newProduct = {
      ...randomProduct,
      new: false,
      slug: slugify(data.name, { lower: true, trim: true, strict: true }),
      category: data.category,
      mainImg: data.mainImg,
      gallery: [data.gallery1, data.gallery2, data.gallery3],
      name: data.name,
      des: data.des,
      price: data.price,
    };
    addProduct(newProduct);

    reset();
    document.getElementById("product_modal").close();
    toast.success("Product added successfully 🔥");
  };

  const inputStyle =
    "w-full bg-white border-1 border-black/20 shadow focus:shadow-blue-400";

  return (
    <dialog id="product_modal" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => reset()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {/*//! Content */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-lg">Add Product</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Product Name..."
                className={`input ${inputStyle}`}
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("price", { valueAsNumber: true })}
                type="text"
                placeholder="Enter Product Price..."
                className={`input ${inputStyle}`}
              />
              {errors.price && (
                <p className="text-red-400">{errors.price.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <select
                {...register("category")}
                className={`select ${inputStyle}`}
              >
                <option value="" hidden>
                  Select Product Category
                </option>
                <option value="headphones">Headphones</option>
                <option value="speakers">Speakers</option>
                <option value="earphones">Earphones</option>
              </select>
              {errors.category && (
                <p className="text-red-400">{errors.category.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("mainImg")}
                type="text"
                placeholder="Enter Product Image URL..."
                className={`input ${inputStyle}`}
              />
              {errors.mainImg && (
                <p className="text-red-400">{errors.mainImg.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("gallery1")}
                type="text"
                placeholder="Enter Product Gallery1 URL..."
                className={`input ${inputStyle}`}
              />
              {errors.gallery1 && (
                <p className="text-red-400">{errors.gallery1.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("gallery2")}
                type="text"
                placeholder="Enter Product Gallery2 URL..."
                className={`input ${inputStyle}`}
              />
              {errors.gallery2 && (
                <p className="text-red-400">{errors.gallery2.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("gallery3")}
                type="text"
                placeholder="Enter Product Gallery3 URL..."
                className={`input ${inputStyle}`}
              />
              {errors.gallery3 && (
                <p className="text-red-400">{errors.gallery3.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <textarea
                {...register("description")}
                type="text"
                placeholder="Enter Product Description..."
                className={`textarea ${inputStyle}`}
              />
              {errors.description && (
                <p className="text-red-400">{errors.description.message}</p>
              )}
            </div>
            <button className="btn bg-blue-600 text-white">Add Product</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
