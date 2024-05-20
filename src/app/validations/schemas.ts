import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "El nombre es obligatorio"),
  brand: z.string().min(1, "La marca es obligatoria"),
  category: z.string().min(1, "La categoría es obligatoria"),
  description: z.string().min(1, "La descripción es obligatoria"),
  discountPercentage: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "El descuento debe ser un número válido"),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "El precio debe ser un número válido"),
  rating: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "El rating debe ser un número válido"),
  stock: z.string().regex(/^\d+$/, "El stock debe ser un número entero"),
});
