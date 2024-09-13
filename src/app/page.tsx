import Image from "next/image";
import "./page.modules.css";


export default function Home() {
  return (
    <div className="cont">
      <div className="contTxt">
        <h3> Welcome to your shop where you will found all what you need and don&apos;t forget to check our promotions</h3>
        <h1> Have a Great Time </h1>
      </div>
      <div className="contImgs">
        <Image src="/Images/index.png" alt={""} width={600} height={600} ></Image>
      </div>
    </div>
  );
}
