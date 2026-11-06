import { Link } from "react-router-dom";
import { navLinks } from "#data/navLinks";

export default function Footer({ brand, isHome }) {
    return (
        <footer className="home-footer">
            <nav aria-label="Footer navigation">
                {navLinks.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
            </nav>
            <p>{brand}{isHome ? " — reference preview" : ""}</p>
        </footer>
    );
}
