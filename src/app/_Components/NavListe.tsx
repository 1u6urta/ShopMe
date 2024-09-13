import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Offer", href: "/offer" },
	{ name: "Products", href: "/products" },
	{ name: "About Us", href: "/about" },
]


const NavListe = () => {
	const pathname = usePathname();
    const isActive = (path: string) => {
		return pathname === path;
	};
    return (
        <ul className="navlist ">
            {navLinks.map((link) => {
                return (
                    <li key={link.name} > 
                        <Link href={link.href} className={isActive(link.href) ? "link-active" : "navlink"} key={link.name} >{link.name}</Link>
                    </li>
                )
            }
            )}
        </ul>
    );
}

export default NavListe;