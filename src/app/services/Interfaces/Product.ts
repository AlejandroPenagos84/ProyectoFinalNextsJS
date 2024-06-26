export interface Product {
    id: string,
    title: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: string;
    price: string;
    rating: string;
    stock: string;
    isDeleted?: boolean; // Propiedad opcional
    images?:string[]
}