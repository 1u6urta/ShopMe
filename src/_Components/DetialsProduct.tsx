import Image from "next/image";
import "./Components.css";

type Product = {
    id: number;
    image: string;
    name: string;
    description: string;
    category: string;
    prix: number;
    prixOffer?: number;
    images: string[];
}

const DetialsProduct = ({ product  }: { product: Product } ) => {
    return (
        <div className="detials">
            <div className="UP">
                <div className="cont-img">
                    <Image src={"/Images/Produit/" + product.image} alt={""} width={300} height={350}></Image>
                </div>
                <div className="detials-product">
                    <h1 className="name-product">{product.name}</h1>
                    <div className="cont-txt">

                        <p>{product.description}</p>
                    </div>
                    <div className="cont">
                        <div className="cont-prix">
                            <h3>{product.prixOffer} DA</h3>
                            { (product.prixOffer !== product.prix) && <h4>{product.prix} DA</h4>}
                        </div>
                        <div className="btn">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Down">
                {product.images.map((m?: string) => (
                    <>
                        <Image src={"/Images/Produit/" + m} alt={""} width={150} height={150} ></Image>
                    </>
                ))}
            </div>
        </div>
    );
}

export default DetialsProduct;