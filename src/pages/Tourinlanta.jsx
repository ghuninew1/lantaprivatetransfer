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
            <div className="mb-10 flex h-44 w-full flex-col items-center justify-end bg-[url('/img/bg7.avif')] bg-cover bg-center bg-no-repeat lg:h-60 box-shadow">
                <h1 className="mb-2 rounded-md p-2 text-2xl font-bold uppercase text-slate-200 backdrop-blur-sm lg:text-4xl z-0">
                    {" "}
                    Tourinlanta
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                {data.map((item) => (
                    <div key={item.title} className="relative flex max-w-screen-md w-full flex-col items-center justify-center rounded-lg border-2 border-slate-600/50 p-4 mb-10 shadow-lg shadow-slate-600 animate-fadeInUp">
                        <div className="flex justify-center gap-2 shadow-xl shadow-slate-600">
                            <div className="flex flex-col items-center overflow-hidden rounded-lg">
                                <img src={item.image} alt={item.title} className="max-w-full h-52 object-cover box-shadow" />
                            </div>
                            <p className="absolute left-0 top-0 transform text-2xl font-bold bg-slate-600 text-slate-200">
                                {item.date}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2 pb-10">
                            <h1 className="mb-2 ml-5 text-3xl font-bold">{item.title}</h1>
                            <p className="text-center">{item.description}</p>
                        </div>
                        <Link 
                            to={item.link}
                            rel="noopener noreferrer"
                            className="mt-5 absolute bottom-0 right-0 rounded-md border-2 border-slate-600 bg-slate-600 px-2 py-1 text-white hover:bg-slate-700"
                        >
                            <p className="font-semibold">Read more</p>
                        </Link>
                    </div>
                ))}
            </div>

            
        </div>
    );
}
