import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { businessContact } from "#data/businessContact";
import { referenceImages } from "#data/referenceImages";
import Loading from "../Loading";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "../../pages/home/home.css";

export default function RouteRoot() {
    const { pathname } = useLocation();
    const isHome = pathname === "/" || pathname.toLowerCase() === "/index.php";

    return (
        <div data-home={isHome || undefined} className="bg-background text-foreground flex min-h-screen flex-col font-sans">
            <Header />
            <Navbar brand={businessContact.name} logo={isHome ? referenceImages.logo : undefined} />
            <main className="min-w-0 flex-1">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer brand={businessContact.name} />
            <ScrollRestoration />
        </div>
    );
}
