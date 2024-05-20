import { Product } from "@/app/services/Interfaces/Product";
interface ProductInfoProps {
  singleProduct: Product | null | undefined;
}

export const ProductInfoCreated: React.FC<ProductInfoProps> = ({
  singleProduct,
}) => {
  if (!singleProduct || singleProduct===undefined) {
    return null; // Si es nulo, no renderiza nada
  }

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
        </div>
      )}
    </div>
  );
};
