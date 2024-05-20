"use client";

import { ApiController } from "@/app/services/EndPoinsts/ApiController";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {ProductInfo} from "../../../components/ProductInfo/ProductInfo"
import { Product } from "@/app/services/Interfaces/Product";
import {FormProductModify} from "../../../components/Form/FormProductModify"
import { deleteProduct, getProduct, modifyProduct } from "@/app/Functions/ApiFunctions";

export default function SingleProduct() {
  const params = useParams();
  const { id_product } = params;
  const [singleProduct, setSingleProduct] = useState<Product>();
  const [modify, setModify] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProduct = await getProduct(id_product); // Llamada a la función getProducts
        setSingleProduct(fetchedProduct); // Actualizar el estado con los productos obtenidos
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, [id_product]);

  
return (
  <>
    {modify ? (
      singleProduct && (
        <FormProductModify
          singleProduct={singleProduct}
          setProduct={setSingleProduct}
          setState={modifyProduct}
          handleBoolean={setModify}
          id_product={singleProduct?.id}
        />
      )
    ) : (
      <ProductInfo
        singleProduct={singleProduct}
        deleteProduct={deleteProduct}
        modifyProduct={setModify}
        setSingleProduct={setSingleProduct}
      />
    )}
  </>
);
}
