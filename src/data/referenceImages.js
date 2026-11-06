import { referencePages } from "./referenceWebsite.js";

const homePage = referencePages.find(({ id }) => id === "index");
const homeAssets = homePage.assetReferences;

// The public reference images are for development only.
function image(path, width, height, alt = "") {
    const url = new URL(path, homePage.url).href;
    const sourceUrl = homeAssets.find((asset) => asset.url === url)?.url ?? url;
    return { sourceUrl, src: import.meta.env.DEV ? sourceUrl : undefined, width, height, alt };
}

export const referenceImages = {
    logo: image("images/logo.png", 193, 78, "Krabi Best Transfer"),
    hero: image("images/bg1.jpg", 1920, 1000),
    welcome: image("images/map.jpg", 768, 1019, "Map of Ko Lanta and its ferry connections"),
    features: [
        image("images/ico1.png", 43, 61),
        image("images/ico2.png", 70, 61),
        image("images/ico3.png", 60, 61),
    ],
    fleet: image("images/i1.png", 1427, 315),
    vehicles: {
        "Toyota Altis": image("images/car/camry.jpg", 506, 422, "Reference sedan"),
        "Toyota Fortuner": image("images/car/suv.jpg", 442, 348, "Reference SUV"),
        "Toyota Commuter": image("images/car/van.jpg", 464, 374, "Reference passenger van"),
    },
    articles: {
        qQOcAauCpWOghKstGTEgnJqaqT9coUuv: image("uploads/news/58//index-news608886586046.jpg", 500, 375, "Airport arrivals area"),
        qQycAKuCpWOghKstGTEgnJqaqT9coUuv: image("uploads/news/57//index-news576222507882.jpg", 500, 375, "Passengers inside a van"),
        qQucAKuCpWOghKstGTEgnJqaqT9coUuv: image("uploads/news/56//index-news581704963430.jpg", 1108, 845, "Child seat inside a passenger van"),
    },
};
