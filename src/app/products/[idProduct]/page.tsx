import { Metadata } from "next";
import DetialsProduct from "@/_Components/DetialsProduct";

type Product =  {
    id: number;
    image: string;
    name: string;
    description : string;
    category: string;
    prix: number;
    prixOffer? : number;
    images : string[];
  }
  

export async function generateStaticParams() {
  const response = await fetch('https://my-json-server.typicode.com/1u6urta/repo/Products/');
  const products = await response.json();

  return products.map((product) => ({
    idProduct: product.id, // Adjust this to match the actual ID field in your data
  }));
}
async function ProductId ({ params } : { params : { idProduct : number }}  )  {
    const url = 'https://my-json-server.typicode.com/1u6urta/repo/Products/'+ params.idProduct;
    const product = await fetch(url, {
        cache :"no-store",
    }).then ( res => {
        if ( ! res.ok) {
            throw Error('This product could not be found.');
        }
        return res.json();;
    })
    return ( 
        <DetialsProduct key={product.id} product={product} ></DetialsProduct> 
    );
}

export default ProductId;
