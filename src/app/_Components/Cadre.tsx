import Image from "next/image";
import "./Components.css";

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


const Cadre = ({ productOffer } : { productOffer : Product }) => {
    return (
        <div className="cadre">
            <div className="UP">
                <div className="cont-img">
                    <Image src={"/Images/Produit/"+productOffer.image} alt={""} width={200} height={250}></Image>
                </div>
                <div className="cont-txt">
                    <h3>{productOffer.name}</h3>
                    <p>{productOffer.description}</p>
                    <div className="cont-prix">
                        <h3>{productOffer.prixOffer} DA</h3>
                        <h4>{productOffer.prix} DA</h4>
                        <div className="btn">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Down">
                { productOffer.images.map(( m?: string ) => (
                    <>
                        <Image src={"/Images/Produit/"+m} alt={""} width={100} height={100} ></Image>
                    </>
                ) )}
            </div>
        </div>
    );
}

export default Cadre;
