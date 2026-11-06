import { lazy } from "react";

export const Home = lazy(() => import("./home/Home.jsx"));
export const Contact = lazy(() => import("./Contact.jsx"));
export const Booking = lazy(() => import("./BookingPreview.jsx"));
export const Transferprices = lazy(() => import("./Transferprices.jsx"));
export const HowToPay = lazy(() => import("./HowToPay.jsx"));
export const TourPackages = lazy(() => import("./TourPackages.jsx"));
export const TourDetail = lazy(() => import("./TourDetail.jsx"));
export const Gallery = lazy(() => import("./Gallery.jsx"));
export const FAQ = lazy(() => import("./FAQ.jsx"));
