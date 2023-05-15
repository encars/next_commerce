import { ProductType } from "@/types";

export default async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products: ProductType[] = await response.json();

    return products;
}