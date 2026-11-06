import { Outlet } from "react-router-dom";
import { Footer, Loading } from "#components";
import { Suspense } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
export default function RouteRoot() {
    return (
        <Suspense fallback={<Loading />}>
            <section className="bg-background text-foreground min-h-screen overflow-hidden font-sans">
                <Header />
                <Navbar />
                <main className="lg:min-h-main min-h-mainHi size-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </main>
                <Footer />
            </section>
        </Suspense>
    );
}
