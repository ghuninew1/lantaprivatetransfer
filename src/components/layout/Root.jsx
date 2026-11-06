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
    const isHome = pathname === "/" || pathname === "/home";

    return (
        <div
            data-home={isHome || undefined}
            className="flex flex-col bg-background min-h-screen font-sans text-foreground"
        >
            <Header />
            <Navbar brand={businessContact.name} logo={referenceImages.logo} />
            <main className="flex-1 min-w-0">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer brand={businessContact.name} />
            <ScrollRestoration />
        </div>
    );
}
