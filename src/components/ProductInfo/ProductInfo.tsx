import { Product } from "@/app/services/Interfaces/Product";
import { useParams } from "next/navigation";
interface ProductInfoProps {
  singleProduct: Product | null | undefined;
  deleteProduct: any;
  modifyProduct :any;
  setSingleProduct : (newProduct: Product) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  singleProduct,
  deleteProduct,
  modifyProduct,
  setSingleProduct
}) => {
  if (!singleProduct || singleProduct===undefined) {
    return null; // Si es nulo, no renderiza nada
  }
  const params = useParams();
  const { id_product } = params;

  console.log(singleProduct);
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {singleProduct?.isDeleted ? (
        <div className="flex flex-col items-center p-8 rounded-lg">
          <h1 className="text-6xl font-bold text-red-600">
            {singleProduct?.title}
          </h1>
          <p className="text-4xl text-red-600 mt-4">
            Este producto ha sido eliminado
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-medium-blue">
            {singleProduct?.title}
          </h1>

          <div className="flex pt-10">
            {singleProduct &&
              singleProduct.images &&
              singleProduct.images.length > 0 && (
                <img
                  className="w-[300px] mr-10"
                  src={singleProduct.images[0]}
                  alt={singleProduct.title}
                />
              )}

            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">
                  Categoría
                </h2>
                <p className="text-2xl text-black">{singleProduct?.category}</p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Marca</h2>
                <p className="text-2xl text-black">{singleProduct?.brand}</p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Precio</h2>
                <p className="text-2xl text-black">{singleProduct?.price}</p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Rating</h2>
                <p className="text-2xl text-black">{singleProduct?.rating}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-10 mt-10">
            <h2 className="text-3xl font-bold text-medium-blue">Descripción</h2>
            <p className="text-2xl text-black">{singleProduct?.description}</p>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={async () => {setSingleProduct(await deleteProduct(id_product))
            }}
          >
            Eliminar
          </button>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          onClick={modifyProduct}
          >
            Modificar Producto
          </button>
        </div>
      )}
    </div>
  );
};
