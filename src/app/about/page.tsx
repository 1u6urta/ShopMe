import { Metadata } from "next/types";
import Image from "next/image";
import "./styleAboutUs.css";

export const metadata: Metadata = {
  title: "About Us"
}

const about = () => {
  return (
    <div className="container-about">
      <div className="content-section">
        <div className="content">
          <h3>Shop<span>Me</span> ? </h3>
          <p>
            Welcome to Shop<span>Me</span>,
            Your number one source for all clothes We&apos;re dedicated to giving you the very best of clothes, with a focus on quality of products , Fast Shipping ...
            Founded in 2022 by A-M-I-J-R , ShopMe has come a long way from its beginnings in Tizi Ouzou. When A-M-I-J-R first started out, Our passion for Clothes drove us to do tons of research, Found The best clothes because Nowdays there are a lot of conterfeiting products .
            So that ShopMe can offer you the world&apos;s most advanced T-shirts , Shoes. We now serve customers all over the WORLD, and are thrilled that we&apos;re able to turn our passion into our own website.
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to contact us .
            Sincerely ,
          </p>
          <strong>
            Shop<span>Me</span>-Team.
          </strong>
        </div>
      </div>
      <div className="image-section">
        <Image src="./Images/About us.png" alt="" width={550} height={550} ></Image>
      </div>
    </div>
  );
}

export default about;
