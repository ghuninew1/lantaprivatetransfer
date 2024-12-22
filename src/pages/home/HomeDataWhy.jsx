export default function HomeDataWhy() {
    return (
        <div className="mt-5 mb-20 flex w-full flex-col items-center justify-center animate-fadeIn">
            <h1 className="mb-5 rounded-md p-2 text-2xl font-bold uppercase lg:text-4xl">Why Us</h1>
            <div className="flex h-full w-full flex-row items-center justify-center max-w-screen-xl text-xl lg:text-2xl font-bold text-white ">
                <div className="flex w-full items-end justify-end gap-5 lg:flex-row flex-col text text-center">
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5  bg-[url('/img/bg1.avif')] bg-cover bg-left-top lg:bg-left box-shadow">
                        <p className="">Long term</p>
                        <p className="">Experiences</p>
                    </div>
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5  bg-[url('/img/bg1.avif')] bg-cover bg-left-bottom lg:bg-right box-shadow">
                        <p className="">Specialize</p>
                        <p className="">Driver</p>
                    </div>
                </div>
                <div className="flex w-full flex-col lg:flex-row items-start justify-start gap-5 ml-5">
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5  bg-[url('/img/bg1.avif')] bg-cover bg-right-top lg:bg-left box-shadow">
                        <p className="">Easy</p>
                        <p className="">Contacting</p>
                    </div>
                    <div className="flex h-44 w-44 lg:h-52 lg:w-52 transition-all flex-col items-center justify-center rounded-full p-5 bg-[url('/img/bg1.avif')] bg-cover bg-right-bottom lg:bg-right box-shadow">
                        <p className="">Best Price</p>
                        <p className="">Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
