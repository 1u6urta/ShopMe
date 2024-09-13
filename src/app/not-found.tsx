import Link from "next/link";
// import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "NOT Found"
  };

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div className="next-error">
                <h1 className="next-error-h1">4<span>0</span>4</h1>
                <div className="next-error-div">
                    <h2 className="next-error-h2" >This page could not be found.</h2>
                </div>
            </div> 
            {/* <Image src="/Images/NotFound.png" alt="" width={400} height={400} ></Image> */}
            <Link href="/" className="navlink">Return to Home</Link>
        </div>
    );
}
 
export default NotFound;