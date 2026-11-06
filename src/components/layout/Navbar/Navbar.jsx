import { useEffect, useRef, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { navLinks } from "#data/navLinks";
import { cx } from "#utils/utils";

export default function Navbar({ brand, logo }) {
    const [openFor, setOpenFor] = useState(null);
    const [hiddenFor, setHiddenFor] = useState(null);
    const sticky = useRef(null);
    const { key, pathname } = useLocation();
    const open = openFor === key;

    useEffect(() => {
        const nav = sticky.current;
        let previousY = Math.max(0, window.scrollY);

        function handleScroll() {
            const currentY = Math.max(0, window.scrollY);
            const distance = currentY - previousY;

            if (currentY === 0 || nav.getBoundingClientRect().top > 0) {
                setHiddenFor(null);
            } else if (Math.abs(distance) >= 6) {
                setHiddenFor(distance > 0 ? key : null);
            } else {
                return;
            }

            previousY = currentY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [key]);

    return (
        <div className="home-sticky-nav" ref={sticky}>
            <nav
                className={cx("home-reference-nav", hiddenFor === key && !open && "is-scroll-hidden")}
                aria-label="Main navigation"
            >
                <div className="home-container home-reference-nav-inner">
                    <Link className="home-brand" to="/" onClick={() => setOpenFor(null)}>
                        {logo?.src ? (
                            <img src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
                        ) : (
                            brand
                        )}
                    </Link>
                    <button
                        className="home-menu-toggle"
                        type="button"
                        onClick={() => setOpenFor(open ? null : key)}
                        aria-expanded={open}
                        aria-controls="site-menu"
                    >
                        {open ? "Close menu" : "Menu"}
                    </button>
                    <div id="site-menu" className={cx("home-reference-menu", open && "is-open")}>
                        {navLinks.map(({ to, sourcePath, text }) => {
                            const current = matchPath(to, pathname) || matchPath(sourcePath, pathname);
                            const inSection = to !== "/" && matchPath({ path: to, end: false }, pathname);

                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setOpenFor(null)}
                                    className={cx((current || inSection) && "active")}
                                    aria-current={current ? "page" : undefined}
                                >
                                    {text}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}
