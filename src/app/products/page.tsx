
import Carte from "@/_Components/Carte";
import "./styleProduct.css";
import Link from "next/link";

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



export default async function Products() {
  const url = 'http://localhost:8080/Products/';
  const products = await fetch(url, {
    cache: "no-store",
  }).then(res => {
    if (!res.ok) {
      throw Error('This products could not be found.');
    }
    return res.json();;
  })
  function groupProductsByCategory(products: Product[]): Record<string, Product[]> {
    const groupedProducts: Record<string, Product[]> = {};

    products.map((product) => {
      const { category } = product;
      if (groupedProducts[category]) {
        groupedProducts[category].push(product);
      } else {
        groupedProducts[category] = [product];
      }
    });

    return groupedProducts;
  }

  const categorizedProducts = groupProductsByCategory(products);
  return (
    <>

        <div>
          <ul className="navlist-products">
            {Object.keys(categorizedProducts).map((category) => {
              return (
                <li key={category}>
                  <Link key={category} href={'/products/#'+category} className="navlink-product"  >{category}</Link>
                </li>
              )
            }
            )}
          </ul>
        </div>
      {Object.keys(categorizedProducts).map((category) => (

        <div  key={category} className="products" id={category}>
          <div key={category}  className="category">
            <h1>{category}</h1>
          </div>
          <div className="listProducts">
            {categorizedProducts[category].map((product) => (
              <Carte key={product.id} product={product} />
            ))}
          </div>
        </div>

      ))}
    </>
  );
}
