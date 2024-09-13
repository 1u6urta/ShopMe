import Image from "next/image";
import "./Components.css";
import Link from "next/link";

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
  

const Carte = ({ product }: { product: Product }) => {
    return (
        <div className="carte-offer">
            <Link href={"/products/"+product.id} >
                <Image className="imageProduit" src={"/Images/Produit/" + product.image} alt="" width={250} height={200} />
                <div className="cont-txt-carte">
                    <h3>{product.name}</h3>
                    <h3>{product.prix} DA</h3>
                </div>
            </Link>
        </div>
    );
}

export default Carte;