import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <Link href="www.intagram.com" target="_blank"><i className="fab fa-instagram"></i></Link>
                <Link href="www.telegram.com" target="_blank"><i className="fab fa-telegram"></i></Link>
                <Link href="www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></Link>
                <Link href="www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/offer">Offer</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
            <p className="copyright">
                University Mouloud Mammeri Tizi-Ouzou  @ 2024
            </p>
        </div>
    );
}

export default Footer;
