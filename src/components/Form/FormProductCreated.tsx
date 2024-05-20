import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Product } from '@/app/services/Interfaces/Product';

const productSchema = z.object({
  productName: z.string().min(1, "El nombre es obligatorio"),
  brand: z.string().min(1, "La marca es obligatoria"),
  category: z.string().min(1, "La categoría es obligatoria"),
  description: z.string().min(1, "La descripción es obligatoria"),
  discount: z.string().regex(/^\d+(\.\d{1,2})?$/, "El descuento debe ser un número válido"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "El precio debe ser un número válido"),
  rating: z.string().regex(/^\d+(\.\d{1,2})?$/, "El rating debe ser un número válido"),
  stock: z.string().regex(/^\d+$/, "El stock debe ser un número entero")
});

interface FormProps {
  setProduct: (product: Product) => void;
  setState: (product: Product) => void;
  handleBoolean: (op: boolean) => void;
}

export const ProductForm: React.FC<FormProps> = ({ setProduct, setState, handleBoolean }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>({
    resolver: zodResolver(productSchema)
  });

  const onSubmit = (data:Product) => {
    setProduct(data)
    setState(data)
    handleBoolean(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit(data => onSubmit(data))} className="grid grid-cols-1 gap-4 p-8 bg-white rounded shadow-md w-full max-w-lg">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="productName" {...register("productName")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca</label>
          <input type="text" id="brand" {...register("brand")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoria</label>
          <input type="text" id="category" {...register("category")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
          <input type="text" id="description" {...register("description")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Descuento</label>
          <input type="text" id="discount" {...register("discount")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
          <input type="text" id="price" {...register("price")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <input type="text" id="rating" {...register("rating")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
          <input type="text" id="stock" {...register("stock")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <button type="submit" className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
