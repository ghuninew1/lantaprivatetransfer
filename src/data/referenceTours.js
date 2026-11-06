import { referenceContent } from "./referenceWebsite.js";

const { articles, discovery } = referenceContent;

export const tourArticles = articles.map(({ url, previewTitle, publishedDate, featured }) => ({
    id: new URL(url).searchParams.get("WP"),
    url,
    title: previewTitle,
    date: publishedDate,
    featured: Boolean(featured),
})).sort((first, second) => second.date.localeCompare(first.date));

export const toursById = new Map(tourArticles.map((article) => [article.id, article]));
export const featuredTours = tourArticles.filter(({ featured }) => featured);

const monthFormat = new Intl.DateTimeFormat("en", { month: "long", timeZone: "UTC" });

export const referenceCategoryYear = discovery.listingCategoryYear;

export const referenceMonths = discovery.listingRequests.flatMap(({ url }) => {
    const month = new URL(url).searchParams.get("inputmonth");
    return month ? [{ value: month, label: monthFormat.format(new Date(`2000-${month}-01T00:00:00Z`)) }] : [];
});

const legacyContactTopics = new Map(discovery.sitemapUrls.flatMap((url) => {
    const { pathname, searchParams } = new URL(url);
    const message = searchParams.get("message");
    if (pathname !== "/contact.php" || !message) return [];

    const heading = message.split("Package Name : ")[1]?.split("฿")[0].trim();
    const article = articles.find((item) => item.heading.split("฿")[0].trim() === heading);
    return article ? [[message, toursById.get(new URL(article.url).searchParams.get("WP"))]] : [];
}));

export function getContactTopic(params) {
    return toursById.get(params.get("article"))
        ?? (params.get("subject") === "Booking Tour" ? legacyContactTopics.get(params.get("message")) : undefined);
}

export function tourPath(id) {
    return `/tour-packages/${encodeURIComponent(id)}`;
}
