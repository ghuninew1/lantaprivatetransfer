// Aggregate snapshot for consumers that need the entire reference site.
import { homeContent } from "./referenceHome.js";
import { routesAndPrices } from "./referenceTransferPrices.js";
import { booking } from "./referenceBooking.js";
import { howToPay } from "./referenceHowToPay.js";
import { faq } from "./referenceFaq.js";
import { contact } from "./referenceContact.js";
import { gallery } from "./referenceGallery.js";
import { articles } from "./referenceTours.js";
import { discovery } from "./referenceDiscovery.js";

export { referenceMetadata, referenceBusiness, referencePages } from "./referenceSite.js";
export { referenceVehicles } from "./referenceVehicles.js";

export const referenceContent = {
    home: homeContent,
    routesAndPrices,
    booking,
    howToPay,
    faq,
    contact,
    gallery,
    articles,
    discovery,
};
