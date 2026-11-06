import { referencePages } from "./referenceSite.js";

const homePage = referencePages.find(({ id }) => id === "index");
const homeAssets = homePage.assetReferences;

// The files in public/images use the original filenames in a flat directory.
function image(path, width, height, alt = "") {
    const url = new URL(path, homePage.url).href;
    const sourceUrl = homeAssets.find((asset) => asset.url === url)?.url ?? url;
    const filename = path.split("/").pop();
    const src = `${import.meta.env?.BASE_URL ?? "/"}images/${filename}`;
    return { sourceUrl, src, width, height, alt };
}

export const referenceImages = {
    logo: image("images/logo640.png", 640, 640, "Lanta Private Transfer"),
    hero: image("images/bg1.jpg", 1920, 1000),
    welcome: image("images/map.jpg", 768, 1019, "Map of Ko Lanta and its ferry connections"),
    features: [image("images/ico1.png", 43, 61), image("images/ico2.png", 70, 61), image("images/ico3.png", 60, 61)],
    fleet: image("images/i1.png", 1427, 315),
    vehicles: {
        "Toyota Altis": image("images/camry.jpg", 506, 422, "Reference sedan"),
        "Toyota Fortuner": image("images/suv.jpg", 442, 348, "Reference SUV"),
        "Toyota Commuter": image("images/van.jpg", 464, 374, "Reference passenger van"),
    },
    articles: {
        qQOcAauCpWOghKstGTEgnJqaqT9coUuv: image("images/index-news608886586046.jpg", 500, 375, "Airport arrivals area"),
        qQycAKuCpWOghKstGTEgnJqaqT9coUuv: image(
            "images/index-news576222507882.jpg",
            500,
            375,
            "Passengers inside a van",
        ),
        qQucAKuCpWOghKstGTEgnJqaqT9coUuv: image(
            "images/index-news581704963430.jpg",
            1108,
            845,
            "Child seat inside a passenger van",
        ),
    },
};
