import { referenceBusiness, referencePages } from "./referenceSite.js";
import { referenceVehicles } from "./referenceVehicles.js";
import { referenceImages } from "./referenceImages.js";
import { toursById, tourPath } from "./referenceTours.js";

export const homeContent = {
    "sourceUrl": "https://www.krabibesttransfer.com/index.php",
    "status": "verified",
    "quickForm": [
      "From",
      "To",
      "Vehicle Type",
      "Price"
    ],
    "promotion": "Round-trip discount stated as 3–5%; exact calculation not verified.",
    "services": [
      "Private airport and hotel transfers",
      "Private transfers to requested destinations",
      "Southern Thailand coverage"
    ],
    "vehicleSourceUrl": "https://www.krabibesttransfer.com/index.php"
  };

const homePage = referencePages.find(({ id }) => id === "index");

export const homeReference = {
    business: referenceBusiness,
    content: homeContent,
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
        { label: "Shuttle service", summary: homeContent.services[0] },
        { label: "Comprehensive", summary: homeContent.services[2] },
        { label: "Variety", summary: referenceVehicles.map(({ type }) => type).join(" · ") },
    ],
    statistics: [
        { id: "visitors", label: "Visitors today", value: 0 },
        { id: "customers", label: "Happy customers", value: 8218 },
        { id: "drivers", label: "Talented drivers", value: 60 },
        { id: "cities", label: "Cities covered", value: 200 },
    ],
};
