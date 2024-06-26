"use client";

import { ApiController } from "@/app/services/EndPoinsts/ApiController";
import { useEffect, useState } from "react";
import { FormProductCreated} from "@/components/Form/FormProductCreated";
import { Product } from "@/app/services/Interfaces/Product";
import { ProductInfoCreated } from "@/components/ProductInfo/ProductInfoCreated";
import { createProduct, deleteProduct, modifyProduct } from "../Functions/ApiFunctions";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState<Product>();
  const [create, setCreate] = useState<boolean>(true);

  return (
    <>
      {create? (
        <FormProductCreated setProduct={setSingleProduct} setState={createProduct} handleBoolean={setCreate} />
      ) : (
        <ProductInfoCreated singleProduct={singleProduct} />
      )}
    </>
  );
}
