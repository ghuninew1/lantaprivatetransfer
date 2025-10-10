import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="w-full bg-slate-800 px-5 lg:block lg:h-header animate-zoomInDown">
            <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between lg:flex-row p-1">
                <Link to={"https://maps.app.goo.gl/LAguPtu6SZLX66Ja8"} target="_blank" className="flex items-center">
                    <HomeIcon className="mx-1 h-4 w-4 text-white" />
                    <p className="text-xs font-normal text-white lg:text-base"> 42/2 Moo 3, Krabi, Thailand</p>
                </Link>
                <Link to={"tel:+66981624827"} className="items-center flex">
                    <PhoneIcon className="mx-1 h-4 w-4 text-white" />
                    <h1 className="rounded-md text-xs lg:text-base text-white flex items-center">+66 (0)98 162 4827<img src="/img/whatsapplogo.png" alt="" className="w-1/3 pl-2" /></h1>
                </Link>
                <Link to={"mailto:thaiworld2020@gmail.com"} className="items-center hidden lg:flex">
                    <EnvelopeIcon className="mx-1 h-4 w-4 text-white" />
                    <h1 className="rounded-md text-xs lg:text-base text-white">thaiworld2020@gmail.com</h1>
                </Link>
            </div>
        </header>
    );
}
