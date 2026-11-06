import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { cx } from "#utils/utils";
import { referenceBusiness } from "#data/referenceWebsite";
import { businessContact } from "#data/businessContact";
import Loading from "../Loading";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "../../pages/home/home.css";

export default function RouteRoot() {
    const { pathname } = useLocation();
    const isHome = pathname === "/" || pathname.toLowerCase() === "/index.php";
    const brand = isHome ? referenceBusiness.name : businessContact.name;

    return (
        <div className={cx("bg-background text-foreground flex min-h-screen flex-col font-sans", isHome && "home-shell")}>
            <Header isHome={isHome} />
            <Navbar brand={brand} />
            <main className="min-w-0 flex-1">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer brand={brand} isHome={isHome} />
            <ScrollRestoration />
        </div>
    );
}
