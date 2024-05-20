"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/app/validations/schemas";
import { Product } from "@/app/services/Interfaces/Product";


interface FormProps {
  singleProduct : Product,
  setProduct: (product: Product) => void;
  setState: (id:string | string[], product: Product) => void;
  handleBoolean : (op: boolean) => void;
  id_product?: string;
}

export const FormProductModify: React.FC<FormProps> = ({ singleProduct,setProduct, setState , handleBoolean, id_product}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const submit = (data: Product) =>{
    setProduct(data);
    handleBoolean(false);
    if(id_product)
      setState(id_product,data);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit(data => submit(data))} className="grid grid-cols-1 gap-4 p-8 bg-white rounded shadow-md w-full max-w-lg">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="productName" {...register("title")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.title}/>
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca</label>
          <input type="text" id="brand" {...register("brand")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.brand}/>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoria</label>
          <input type="text" id="category" {...register("category")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.category}/>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
          <input type="text" id="description" {...register("description")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={singleProduct.description} />
        </div>

        <div>
          <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Descuento</label>
          <input type="text" id="discount" {...register("discountPercentage")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.discountPercentage}/>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
          <input type="text" id="price" {...register("price")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.price}/>
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <input type="text" id="rating" {...register("rating")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={singleProduct.rating} />
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
          <input type="text" id="stock" {...register("stock")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          defaultValue={singleProduct.stock}/>
        </div>

        <div>
          <button type="submit" className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
      </form>
    </div>
  );
}
