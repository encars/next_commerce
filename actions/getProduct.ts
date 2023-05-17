import { ProductType } from "@/types";

export default async function getProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: ProductType = await response.json();

    return product;
}