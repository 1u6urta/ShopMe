"use client";
import { useState } from "react";
import "./styleLogin.css";
import Link from "next/link";
import Image from "next/image";
const LoginPage = () => {
    const [inLogin, setInLogin] = useState(true)

    const handleClick = () => {
        if (inLogin) {
            setInLogin(false);
        } else {
            setInLogin(true);
        }
    }
    return (
        <div className="login-class">
            <div className={inLogin ? "container-login" : "container-login active"}>
                <div className="forms">
                    <div className="form login">
                        <span className="title">Login</span>

                        <form method="post">
                            <div className="input-field">
                                <input type="email" name="lemail" id="lemail" placeholder="Enter your email" />
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" name="lpassword" id="lpassword" placeholder="Enter your password" />
                                <i className="uil uil-lock icon"></i>
                            </div>

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="logCheck" />
                                    <label className="text">Remember me</label>
                                </div>
                                <Link href="/Forgot-Password" className="text-link">Forgot password?</Link>
                            </div>

                            <div className="input-field button">
                                <input type="submit" name="formlogin" id="formlogin" value="Login" />
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">Not a member?
                                <button className="text-link signup-link" onClick={handleClick} > Signup Now</button>
                            </span>
                        </div>
                    </div>


                    <div className="form signup">
                        <span className="title">Registration</span>
                        <form method="post">
                            <div className="input-field">
                                <input type="email" name="email" id="email" placeholder="Enter your email" />
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" name="password" id="password" placeholder="Create a password" />
                                <i className="uil uil-lock icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" name="cpassword" id="cpassword" placeholder="Confirm a password" />
                                <i className="uil uil-lock icon"></i>
                            </div>
                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="termCon" />
                                    <label className="text">I accepted all terms and conditions</label>
                                </div>
                            </div>
                            <div className="input-field button">
                                <input type="submit" name="formsend" id="formsend" value="Signup" />
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">Already a member?
                                <button className="text-link login-link" onClick={handleClick} > Login Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont-img">
                <Image src="/Images/Login.png" alt={""} width={600} height={600} ></Image>
            </div>
        </div>
    );
}

export default LoginPage;