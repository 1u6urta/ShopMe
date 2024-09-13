import { useEffect, useState } from "react";
import Cadre from "@/_Components/Cadre";
import { Metadata } from "next";

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


export const metadata: Metadata = {
  title: "Offer"
};

export default  async function Offer( ) {
  const url = 'https://my-json-server.typicode.com/1u6urta/repo/Products/';
    const products = await fetch(url, {
        cache :"no-store",
    }).then ( res => {
        if ( ! res.ok) {
            throw Error('This products could not be found.');
        }
        return res.json();;
    })
    
  const offerProducts = products.filter( (product : {
    id: number; 
    image: string; 
    name: string; 
    description: string; 
    prixOffer: string; 
    prix: string; 
    images: string[] 
  }) => product.prixOffer !== product.prix );
  return ( 
    <>
      { offerProducts.map( (productOffer: Product ) => (
        <Cadre productOffer={productOffer} key={productOffer.id} ></Cadre>
      ))}
    </>
    
  );
}



