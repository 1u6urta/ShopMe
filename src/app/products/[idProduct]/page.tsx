import { Metadata } from "next";
import DetailsProduct from "@/_Components/DetailsProduct";

// Define the Product type
type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  prix: number;
  prixOffer?: number;
  images: string[];
};

// Function to generate static params
export async function generateStaticParams() {
  // Fetch the products and cast the result as Product[]
  const response = await fetch('https://my-json-server.typicode.com/1u6urta/repo/Products/');
  const products: Product[] = await response.json(); // Explicitly set the type to Product[]

  // Return params for each product
  return products.map((product) => ({
    idProduct: product.id.toString(), // Convert id to string if necessary
  }));
}

// Dynamic product page component
async function ProductId({ params }: { params: { idProduct: string } }) {
  const url = `https://my-json-server.typicode.com/1u6urta/repo/Products/${params.idProduct}`;
  
  // Fetch individual product
  const product: Product = await fetch(url, {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) {
      throw new Error('This product could not be found.');
    }
    return res.json();
  });

  // Render product details
  return <DetailsProduct key={product.id} product={product} />;
}

export default ProductId;
