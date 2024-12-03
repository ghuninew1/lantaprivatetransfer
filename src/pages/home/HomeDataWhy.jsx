export default function HomeDataWhy() {
    return (
        <div className="mt-5 mb-10 flex w-full flex-col items-center justify-center animate-fadeIn">
            <h1 className="mb-5 rounded-md p-2 text-2xl font-bold uppercase md:text-4xl">Why Us</h1>
            <div className="flex h-full w-full flex-row items-center justify-center max-w-screen-xl text-xl lg:text-2xl">
                <div className="flex w-full items-end justify-end gap-5 lg:flex-row flex-col text text-center">
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5 ring-4 ring-orange-500 hover:ring-orange-800">
                        <p className="font-bold  backdrop-blur-sm">Long term</p>
                        <p className="font-bold  backdrop-blur-sm">Experiences</p>
                    </div>
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5 ring-4 ring-orange-500 hover:ring-orange-800">
                        <p className="font-bold  backdrop-blur-sm">Specialize</p>
                        <p className="font-bold  backdrop-blur-sm">Driver</p>
                    </div>
                </div>
                <div className="flex w-full flex-col lg:flex-row items-start justify-start gap-5 ml-5">
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5 ring-4 ring-orange-500 hover:ring-orange-800">
                        <p className="font-bold  backdrop-blur-sm">Easy</p>
                        <p className="font-bold  backdrop-blur-sm">Contacting</p>
                    </div>
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5 ring-4 ring-orange-500 hover:ring-orange-800">
                        <p className="font-bold  backdrop-blur-sm">Best Price</p>
                        <p className="font-bold  backdrop-blur-sm">Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
