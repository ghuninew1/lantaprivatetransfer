import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="w-full bg-slate-800 px-5 md:block md:h-header animate-zoomInDown">
            <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between md:flex-row">
                <Link to={"/"} className="flex items-center">
                    <HomeIcon className="mx-1 h-4 w-4 text-white" />
                    <p className="text-sm font-normal text-white"> 29 Moo 2, Krabi, Thailand</p>
                </Link>
                <Link to={"tel:+6689-2922917"} className="items-center flex">
                    <PhoneIcon className="mx-1 h-4 w-4 text-white" />
                    <h1 className="rounded-md text-sm text-white">+6694 579 6331</h1>
                </Link>
                <Link to={"mailto:aakanun43@gmail.com"} className="items-center hidden md:flex">
                    <EnvelopeIcon className="mx-1 h-4 w-4 text-white" />
                    <h1 className="rounded-md text-sm text-white">xxxx@gmail.com</h1>
                </Link>
            </div>
        </header>
    );
}
