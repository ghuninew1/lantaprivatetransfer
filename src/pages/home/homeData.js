import { referenceBusiness, referenceContent, referencePages, referenceVehicles } from "#data/referenceWebsite";
import { referenceImages } from "#data/referenceImages";
import { toursById, tourPath } from "#data/referenceTours";

const homePage = referencePages.find(({ id }) => id === "index");

export const homeReference = {
    business: referenceBusiness,
    content: referenceContent.home,
    headings: homePage.headings,
    vehicles: referenceVehicles,
    articles: Object.entries(referenceImages.articles).map(([id, image]) => ({
        ...toursById.get(id),
        image,
        to: tourPath(id),
    })),
    quickValues: ["Starting point", "Select destination", referenceVehicles[0].type, "Pending confirmation"],
    heroHeading: "Super special",
    services: [
        { label: "Shuttle service", summary: referenceContent.home.services[0] },
        { label: "Comprehensive", summary: referenceContent.home.services[2] },
        { label: "Variety", summary: referenceVehicles.map(({ type }) => type).join(" · ") },
    ],
    statistics: ["Visitors today", "Happy customers", "Drivers", "Cities covered"],
};
