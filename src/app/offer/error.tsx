"use client"

import Link from "next/link";

function ErrorPage  ({ error } : {error : Error }) {
    return (
        <div className="not-found">
            <div className="next-error">
                <div className="next-error-div">
                    <h2 className="next-error-h2" >{error.message}</h2>
                </div>
            </div> 
            {/* <Image src="/Images/NotFound.png" alt="" width={400} height={400} ></Image> */}
            <Link href="/" className="navlink">Return to Home</Link>
        </div>
    );
}
 
export default ErrorPage; 