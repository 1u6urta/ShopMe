"use client";
import Link from "next/link";
import Image from "next/image";
import "./Components.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavListe from "./NavListe";


const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Offer", href: "/offer" },
	{ name: "Products", href: "/products" },
	{ name: "About Us", href: "/about" },
]

const Header = () => {

	const [showNavbar, setShownavbar] = useState(false);

	function handleClick() {
		if (showNavbar) {
			setShownavbar(false);
		} else {
			setShownavbar(true);
		}
	}

	return (
		<>
			<div className="navbar navbar-1">

				<div className="navlogo">

					<h1 id="logo">
						<button className="menulink" onClick={handleClick}>
							<Image src="/menu.svg" alt={""} width={200} height={200} ></Image>
						</button>
						<div className="cercle"></div>
						Shop
						<span>
							Me
						</span>
					</h1>
				</div>
				<div>
					<NavListe></NavListe>
				</div>
				<div className="btn">
					<Link href="/login">Login</Link>
				</div>
			</div>
			<div className="navbar navbar-2 ">
				<div className="navlogo">
					<h1 id="logo">
						<button className="menulink" onClick={handleClick}>
							<Image src="/menu.svg" alt={""} width={200} height={200} ></Image>
						</button>
						<div className="cercle"></div>
						Shop
						<span>Me</span>
					</h1>
				</div>
				<div>
					<NavListe></NavListe>
				</div>
				<div className="btn">
					<Link href="/login">Login</Link>
				</div>
			</div>
			<div className={showNavbar ? "showMore" : "none"}>
				<NavListe></NavListe>
			</div>
		</>
	);
}

export default Header;