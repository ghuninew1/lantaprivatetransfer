import { Link } from "react-router-dom";
import { navLinks } from "#data/navLinks";

const homeFooterOrder = ["index", "rate", "booking", "faq", "pay", "contact"];

export default function Footer({ brand, isHome }) {
    const links = isHome ? homeFooterOrder.map((id) => navLinks.find((link) => link.id === id)) : navLinks;

    return (
        <footer className="home-footer">
            <nav aria-label="Footer navigation">
                {links.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
            </nav>
            <p>{brand}{isHome ? " — reference preview" : ""}</p>
        </footer>
    );
}
