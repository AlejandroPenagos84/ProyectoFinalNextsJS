import { Product } from "../Interfaces/Product";

export const ApiController = (function(){
    // Metodo para obtener todos los productos
    const _getProducts = async (): Promise<Product[]> => {
        const response = await fetch('https://dummyjson.com/products');
    
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data.products;
    };

    const _getSingleProduct = async (id: string | string[]): Promise<Product> => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        const data: any = await response.json();
        return data;
    }

    const _deleteProduct = async (id: string | string[]): Promise<Product> => {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        });
    
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
    
        const data = await response.json();
    
        return data;
    };

    const _createProduct = async (newProduct : Product ): Promise<Product> => {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
          })

        if (!response.ok) {
            throw new Error('Failed to fetch albums');
        }

        const data = await response.json();
        return data;
    };

    const _modifyProduct = async (id: string | string[], newProduct: Product): Promise<Product> => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });
    
            if (!response.ok) {
                throw new Error('Failed to modify product');
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            // Manejar errores de forma apropiada, por ejemplo, enviar a un servicio de registro de errores
            console.error('Error modifying product:', error);
            throw error; // Re-lanzar el error para que el componente que llama pueda manejarlo
        }
    };

    return{
        getProducts(){
            return _getProducts();
        },
        getSingleProduct(id: string | string[]){
            return _getSingleProduct(id);
        },
        deleteProduct (id: string | string[]){
            return _deleteProduct (id);
        },
        createProduct(newProduct : Product ){
            return _createProduct(newProduct);
        },
        modifyProduct(id: string | string[], newProduct : Product){
            return _modifyProduct(id, newProduct);
        },
    }
})();


