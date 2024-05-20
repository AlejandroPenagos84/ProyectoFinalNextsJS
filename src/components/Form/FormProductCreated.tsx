"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/app/validations/schemas";
import { Product } from "@/app/services/Interfaces/Product";

interface FormProps {
  setProduct: (product: Product) => void;
  setState: (product: Product) => Promise<Product>;
  handleBoolean : (op: boolean) => void;
}

export const FormProductCreated: React.FC<FormProps> = ({ setProduct, setState , handleBoolean}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const submit = async (data: Product) => {
    setProduct(await setState(data));
    handleBoolean(false);
  };

  return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
          <form
            onSubmit={handleSubmit(data=>{submit(data)})}
            className="grid grid-cols-1 gap-4 p-8 bg-white rounded shadow-md w-full max-w-lg"
          >
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("title")}
              />
              {errors.title?.message && <p className="text-red-600">{errors.title?.message}</p>
              }
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Marca
              </label>
              <input
                type="text"
                id="brand"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("brand")}
              />
              {errors.brand?.message && (
                <p className="text-red-600">{errors.brand?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Categoria
              </label>
              <input
                type="text"
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("category")}
              />
              {errors.category?.message && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <input
                type="text"
                id="description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("description")}
              />
              {errors.description?.message && (
                <p className="text-red-600">{errors.description?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700"
              >
                Descuento
              </label>
              <input
                type="text"
                id="discount"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("discountPercentage")}
              />
              {errors.discountPercentage?.message && (
                <p className="text-red-600">{errors.discountPercentage?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Precio
              </label>
              <input
                type="text"
                id="price"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("price")}
              />
              {errors.price?.message && (
                <p className="text-red-600">{errors.price?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <input
                type="text"
                id="rating"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("rating")}
              />
              {errors.rating?.message && (
                <p className="text-red-600">{errors.rating?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="text"
                id="stock"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("stock")}
              />
              {errors.stock?.message && (
                <p className="text-red-600">{errors.stock?.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
  );
}
