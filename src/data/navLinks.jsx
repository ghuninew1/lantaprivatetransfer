import { referencePages } from "./referenceWebsite";
import { Home, Transferprices, HowToPay, TourPackages, Gallery, FAQ, Contact, Booking } from "../pages";

const sourcePaths = new Map(referencePages.map(({ id, path }) => [id, path]));

export const navLinks = [
    { id: "index", text: "Home", to: "/", element: <Home /> },
    { id: "rate", text: "Check Price", to: "/transferprices", element: <Transferprices /> },
    { id: "pay", text: "How to Pay", to: "/how-to-pay", element: <HowToPay /> },
    { id: "blog", text: "Blog", to: "/tour-packages", element: <TourPackages /> },
    { id: "gallery", text: "Gallery", to: "/gallery", element: <Gallery /> },
    { id: "faq", text: "FAQ", to: "/faq", element: <FAQ /> },
    { id: "contact", text: "Contact", to: "/contact", element: <Contact /> },
    { id: "booking", text: "Booking", to: "/booking", element: <Booking /> },
].map((link) => ({ ...link, sourcePath: sourcePaths.get(link.id) }));
