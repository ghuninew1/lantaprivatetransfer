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
            className="flex min-h-screen flex-col bg-background font-sans text-foreground"
        >
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
