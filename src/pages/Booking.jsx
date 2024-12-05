import { useState } from "react";
// import { cx } from "#utils";

export default function Booking() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex max-w-full flex-col items-center justify-center">
            <div className="mb-10 flex h-44 w-full flex-col items-center justify-end bg-[url('/img/bg7.jpg')] bg-cover bg-center bg-no-repeat lg:h-60 box-shadow">
                <h1 className="mb-2 rounded-md p-2 text-4xl font-bold uppercase backdrop-blur-sm text-slate-200 animate-zoomIn">Booking</h1>
            </div>
            <p className="text-2xl font-bold">Count: {count}</p>
            <button className="mt-5 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
