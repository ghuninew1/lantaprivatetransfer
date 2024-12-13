import { Link } from "react-router-dom";
export default function Tourinlanta() {
    const data = [
        {
            title: "Day 1",
            date: "2024-08-01",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat.",
            link: "#",
            image: "/img/1.avif",
        },
        {
            title: "Day 2",
            date: "2024-08-02",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat.",
            link: "#",
            image: "/img/2.avif",
        },
        {
            title: "Day 3",
            date: "2024-08-03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat.",
            link: "#",
            image: "/img/3.avif",
        },
    ]
    return (
        <div className="flex w-full flex-col items-center justify-center max-w-full">
            <div className="mb-10 flex h-44 w-full flex-col items-end justify-end bg-[url('/img/bg7.avif')] bg-cover bg-center bg-no-repeat lg:h-60 box-shadow">
                <h1 className="mb-2 mr-10 rounded-md p-2 text-2xl font-bold uppercase text-slate-200 lg:text-4xl">
                    {" "}
                    Tourinlanta
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                {data.map((item) => (
                    <div key={item.title} className="relative flex w-full h-full flex-col items-center justify-center bg-slate-100 rounded-xl border-2 border-slate-700/50 p-4 mb-10 shadow-md shadow-slate-600 animate-fadeInUp">
                        <div className="flex justify-center gap-2 shadow-xl shadow-slate-600">
                            <div className="flex flex-col items-center overflow-hidden w-full">
                                <img src={item.image} alt={item.title} className="max-w-full h-60 object-cover box-shadow" />
                            </div>
                            <p className="absolute left-0 top-0 transform text-2xl font-bold bg-green-700 text-slate-200">
                                {item.date}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2 pb-10">
                            <h1 className="mb-2 ml-5 text-3xl font-bold">{item.title}</h1>
                            <hr className="w-full border-2 border-green-700" />
                            <p className="text-center">{item.description}</p>
                        </div>
                        <Link 
                            to={item.link}
                            rel="noopener noreferrer"
                            className="mt-5 absolute bottom-0 right-0 rounded-md border-2 border-green-800 bg-green-600 px-2 py-1 text-white hover:bg-green-700"
                        >
                            <p className="font-semibold">Read more</p>
                        </Link>
                    </div>
                ))}
            </div>

            
        </div>
    );
}
