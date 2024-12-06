export default function Collection() {
    const dataCollection = [
        {
            title: "Toyota Altis",
            start: "399 THB",
            image: "/img/c1.jpg",
            bags: ["Large 2 Bags", "Small 2 Bags"],
            passengers: ["3+1 Passengers", "airbags", "ac"],
        },
        {
            title: "Toyota Fortuner",
            start: "499 THB",
            image: "/img/c2.jpg",
            bags: ["Large 3 Bags", "Small 2 Bags"],
            passengers: ["4+1 Passengers", "airbags", "ac"],
        },
        {
            title: "Toyota Commuter",
            start: "599 THB",
            image: "/img/c3.jpg",
            bags: ["Large 6 Bags", "Small 5 Bags"],
            passengers: ["10+1 Passengers", "airbags", "ac"],
        },
    ];
    return (
        <div className="mb-10 mt-10 flex w-full flex-col items-center justify-center">
            <h1 className="mb-1 rounded-md p-2 text-xl font-bold uppercase lg:text-2xl">We have a Great</h1>
            <h1 className="mb-1 rounded-md p-2 text-2xl font-bold uppercase lg:text-3xl flex">
                {" "}
                collection of 
                <p className="text-red-600 ml-2">  vehicles</p>
            </h1>
            <div className="flex max-w-screen-lg flex-col items-center justify-center px-2 lg:flex-row">
                {dataCollection.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-5">
                        <h1 className="mb-1 rounded-md p-2 text-xl font-bold uppercase">{item.title}</h1>
                        <h1 className="mb-1 rounded-md p-2 text-xl font-bold uppercase">{item.start}</h1>
                        <img src={item.image} alt="collection1" className="mb-1 max-h-60" />
                        <ul className="flex flex-row items-center justify-center list-disc gap-5">
                            {item.bags.map((bag, index) => (
                                <li key={index} className="mb-1 uppercase text-sm list-disc">
                                    {bag}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-row items-center justify-center list-disc gap-5">
                            {item.passengers.map((passenger, index) => (
                                <li key={index} className="mb-1 uppercase text-sm">
                                    {passenger}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-5 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
