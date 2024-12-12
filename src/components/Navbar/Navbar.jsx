import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "#assets/navLinks";
import NavbarLinks from "./NavbarLinks";
import { cx } from "#utils/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    function RenderDefaultMenu() {
        return (
            <div className="hidden h-full w-full items-center justify-center gap-4 lg:flex">
                <NavLink to="/">
                    <img src="/img/logo300_2.png" alt="logo" className="h-10" />
                </NavLink>
                {navLinks
                    .filter((link) => link.hide !== true)
                    .map((link) => (
                        <NavbarLinks key={link.text} link={link} />
                    ))}
            </div>
        );
    }

    const renderMobileMenu = () => (
        <div
            className={cx(
                open ? "scale-y-100" : "scale-y-0",
                "absolute top-0 z-30 h-auto w-full origin-top gap-1 bg-black text-white transition-all ease-in-out duration-300 lg:hidden",
            )}
        >
            {navLinks
                .filter((link) => link.hide !== true)
                .map((link) => (
                    <NavbarLinks key={link.text} link={link} onClick={handleOpen} />
                ))}
        </div>
    );

    return (
        <nav className="h-auto w-full animate-fadeIn lg:h-nav" role="navigation">
            <div className="z-20 flex w-full items-center justify-between ">
                <NavLink to="/">
                    <img src="/img/logo300_2.png" alt="logo" className="h-10 px-5 lg:hidden" />
                </NavLink>
                <button
                    onClick={handleOpen}
                    className={cx(open ? "text-red-600" : "text-red-500", "z-20 hover:text-green-600 lg:hidden")}
                >
                    {open ? <XMarkIcon className="h-10 w-10" /> : <Bars3Icon className="h-10 w-10" />}
                </button>
            </div>
            <div className="hidden h-full items-center justify-center lg:flex ">
                <RenderDefaultMenu />
            </div>
            <div className="relative flex h-full w-full items-center justify-center bg-slate-900 lg:hidden z-20">
                {renderMobileMenu()}
            </div>
        </nav>
    );
};

export default Navbar;
