import { Link } from "react-router-dom";
import { navLinks } from "#data/navLinks";

const homeFooterOrder = ["index", "rate", "booking", "faq", "pay", "contact"];

export default function Footer({ brand }) {
    const links = homeFooterOrder.map((id) => navLinks.find((link) => link.id === id));

    return (
        <footer className="home-footer">
            <nav aria-label="Footer navigation">
                {links.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
            </nav>
            <p>{brand} — reference preview</p>
        </footer>
    );
}
