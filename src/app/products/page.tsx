"use client";
import { useEffect, useState } from "react";
import { ApiController } from "../services/EndPoinsts/ApiController";
import Table from "@/components/Table/Table";
import TdComponent from "@/components/Table/TdComponent";
import { useRouter } from "next/navigation";
import { getProducts } from "../Functions/ApiFunctions";
export default function ListAlbums() {
  const [products, setProducts] = useState<any[]>([]);
  const route = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts(); // Llamada a la función getProducts
        setProducts(fetchedProducts); // Actualizar el estado con los productos obtenidos
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts(); // Llamar a la función fetchProducts en useEffect
  }, []);

  const seeSingleProduct = async (id: string) => {
    route.push(`/products/${id}`);
  };

  return (
    <div className="w-full h-screen overflow-x-auto overflow-y-auto">
      {products && products.length > 0 && (
        <Table>
          {products.map(
            (product, index) =>
              !product.isDeleted && (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <TdComponent content={product.title} />
                  <TdComponent content={product.category} />
                  <TdComponent content={product.price} />
                  <TdComponent content={product.rating} />
                  <TdComponent content={product.stock} />
                  <TdComponent
                    content={
                      <button onClick={() => seeSingleProduct(product.id)}>
                        Ver
                      </button>
                    }
                  />
                </tr>
              )
          )}
        </Table>
      )}
    </div>
  );
}
