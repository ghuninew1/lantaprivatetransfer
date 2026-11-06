import { Link, useParams, useSearchParams } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import TourSidebar from "#components/TourSidebar";
import { toursById } from "#data/referenceTours";
import NotFound from "./NotFound";

export default function TourDetail() {
    const { articleId } = useParams();
    const [params] = useSearchParams();
    const article = toursById.get(articleId ?? params.get("WP"));

    if (!article) return <NotFound />;

    return (
        <PageLayout title={article.title}>
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <article className="space-y-5">
                    <Link className="text-blue-700 underline" to="/tour-packages">Back to Package Tour</Link>
                    <p className="text-sm text-gray-600">Reference publication date <time dateTime={article.date}>{article.date}</time></p>
                    <p className="rounded bg-amber-50 p-4">This topic is included for reference. An approved itinerary, photos, prices and booking terms are pending.</p>
                    <p><a className="text-blue-700 underline" href={article.url} target="_blank" rel="noopener noreferrer">Read the source article</a></p>
                    <Link className="home-button" to={`/contact?article=${encodeURIComponent(article.id)}`}>Ask about this topic</Link>
                </article>
                <TourSidebar />
            </div>
        </PageLayout>
    );
}
