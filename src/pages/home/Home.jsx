import Collection from "./Collection";
import Gallery from "./Gallery";
import HomeData from "./HomeData";
import HomeDataWhy from "./HomeDataWhy";

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full h-44 lg:h-60 flex-col items-center justify-end bg-[url('/img/bg1.avif')] bg-cover bg-center bg-no-repeat box-shadow">
            </div>
            <HomeData />
            <Gallery />
            <Collection />
            <HomeDataWhy />
        </div>
    );
}
