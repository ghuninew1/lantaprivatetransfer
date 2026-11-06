import { referenceBusiness, referenceContent, referencePages, referenceVehicles } from "#data/referenceWebsite";

// Reference content is a temporary preview and must be reviewed before publication.
const homePage = referencePages.find((page) => page.id === "index");

export const homeReference = {
    business: referenceBusiness,
    content: referenceContent.home,
    headings: homePage.headings,
    vehicles: referenceVehicles,
    articles: referenceContent.articles.slice(0, 3),
};
