import {
  Home,
  Contact,
  Booking,
  Transferprices,
  // Tourinlanta
} from "../pages";

const navLinks = [
  {
    icon: "",
    text: "Home",
    to: "/",
    element: <Home />,
  },
  {
    icon: "",
    text: "Transfer Prices",
    to: "/transferprices",
    element: <Transferprices />,
  },
  {
    icon: "",
    text: "Tour in Lanta",
    to: "http://www.lantakayaking.com",
    element: () => {},
  },
  {
    icon: "",
    text: "Contact us",
    to: "/contact",
    element: <Contact />,
  },
  {
    icon: "",
    text: "Booking & Pay",
    to: "/booking",
    element: <Booking />,
  },
];


export { navLinks };
