import { useEffect } from "react";
import { businessContact } from "#data/businessContact";

export default function PageLayout({ title, children }) {
    useEffect(() => {
        const previous = document.title;
        document.title = `${title} | ${businessContact.name}`;
        return () => { document.title = previous; };
    }, [title]);

    return (
        <>
            <div className="bg-slate-800 py-12 text-white md:py-16">
                <div className="home-container">
                    <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
                </div>
            </div>
            <div className="home-container space-y-8 py-8 md:py-12">{children}</div>
        </>
    );
}
