import { useState } from "react";
import { XMarkIcon} from "@heroicons/react/24/outline";


export default function Gallery() {
    const [show, setShow] = useState(false);
    const [messageRef, setMessageRef] = useState(null);

    const dataGallary = [
        { id: 1, img: "/img/g1.jpg", alt: "gallary1" },
        { id: 2, img: "/img/g2.jpg", alt: "gallary2" },
        { id: 3, img: "/img/g3.jpg", alt: "gallary3" },
        { id: 4, img: "/img/g4.jpg", alt: "gallary4" },
        { id: 5, img: "/img/g5.jpg", alt: "gallary5" },
    ];
    const data2Gallary = [
        { id: 6, img: "/img/g6.jpg", alt: "gallary6" },
        { id: 7, img: "/img/g7.jpg", alt: "gallary7" },
        { id: 8, img: "/img/g8.jpg", alt: "gallary8" },
        { id: 9, img: "/img/g9.jpg", alt: "gallary9" },
        { id: 10, img: "/img/g10.jpg", alt: "gallary10" },
    ];
    const data3Gallary = [
        { id: 11, img: "/img/g11.jpg", alt: "gallary11" },
        { id: 12, img: "/img/g12.jpg", alt: "gallary12" },
        { id: 13, img: "/img/g13.jpg", alt: "gallary13" },
        { id: 14, img: "/img/g14.jpg", alt: "gallary14" }, 
        { id: 15, img: "/img/g15.jpg", alt: "gallary15" },
    ];

    function handleClick(img) {
        setShow(true);
        setMessageRef(img);
    }

    function ShowImage() {
        const handleClose = () => {
            setShow(false);
        };

        return (
            <div className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-screen-lg -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 rounded-md bg-black p-5">
                <div className="text-center text-xl text-lime-700">
                    <img className="h-full w-full max-h-[700px] object-cover" src={messageRef} alt="" />
                </div>
                <XMarkIcon className="absolute top-5 right-5 h-10 w-10 cursor-pointer text-white hover:text-lime-700" onClick={handleClose} />
                <button
                    className="rounded-md bg-lime-700 p-2 text-white transition-all hover:bg-lime-900"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        );
    }
    return (
        <div className="mt-5 mb-10 flex w-full flex-col items-center justify-center">
            <h1 className="mb-5 rounded-md p-2 text-2xl font-bold uppercase md:text-4xl">Gallery</h1>
            <div className="flex h-full w-full max-w-screen-xl flex-row items-center justify-center animate-zoomIn">
                {dataGallary.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-24 w-24 lg:h-52 lg:w-52 transition-all cursor-pointer flex-col items-center justify-center rounded-full p-5 ring-2 lg:ring-4 ring-orange-500 hover:ring-lime-700"
                    >
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={item.img}
                            alt={item.alt}
                            onClick={() => handleClick(item.img)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex h-full w-full max-w-screen-xl flex-row items-center justify-center animate-zoomIn">
                {data2Gallary.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-24 w-24 lg:h-52 lg:w-52 transition-all cursor-pointer flex-col items-center justify-center rounded-full p-5 ring-2 lg:ring-4 ring-orange-500 hover:ring-lime-700"
                    >
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={item.img}
                            alt={item.alt}
                            onClick={() => handleClick(item.img)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex h-full w-full max-w-screen-xl flex-row items-center justify-center animate-zoomIn">
                {data3Gallary.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-24 w-24 lg:h-52 lg:w-52 transition-all cursor-pointer flex-col items-center justify-center rounded-full p-5 ring-2 lg:ring-4 ring-orange-500 hover:ring-lime-700"
                    >
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={item.img}
                            alt={item.alt}
                            onClick={() => handleClick(item.img)}
                        />
                    </div>
                ))}
            </div>
            {show && <ShowImage />}
        </div>
    );
}