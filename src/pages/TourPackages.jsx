import { Link, useSearchParams } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import TourSidebar from "#components/TourSidebar";
import { referenceCategoryYear, referenceMonths, tourArticles, tourPath } from "#data/referenceTours";

const pageSize = 10;

export default function TourPackages() {
    const [params] = useSearchParams();
    const month = referenceMonths.find(({ value }) => value === params.get("inputmonth"));
    const articles = month ? tourArticles.filter(({ date }) => date.startsWith(`${referenceCategoryYear}-${month.value}-`)) : tourArticles;
    const pageCount = Math.ceil(articles.length / pageSize);
    const requested = params.get("module_pageshow") ?? "";
    const page = /^[1-9]\d*$/.test(requested) ? Math.min(Number(requested), pageCount || 1) : 1;
    const visible = articles.slice((page - 1) * pageSize, page * pageSize);

    function pagePath(number) {
        const query = new URLSearchParams();
        if (month) query.set("inputmonth", month.value);
        if (number > 1) query.set("module_pageshow", number);
        return query.size ? `/tour-packages?${query}` : "/tour-packages";
    }

    return (
        <PageLayout title="Package Tour">
            <p className="rounded bg-amber-50 p-4 text-sm">Reference article index. Lanta Private Transfer tour itineraries, availability and prices are pending confirmation.</p>
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">{month ? `${month.label} ${referenceCategoryYear}` : "All reference articles"}</h2>
                    {visible.length ? (
                        <ul className="grid gap-3">
                            {visible.map(({ id, title, date }) => (
                                <li key={id}>
                                    <article className="rounded border border-gray-200 p-4">
                                        <time dateTime={date} className="text-sm text-gray-600">{date}</time>
                                        <h3 className="text-lg font-semibold"><Link className="block text-blue-700 underline" to={tourPath(id)}>{title}</Link></h3>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    ) : <p>No reference articles were recorded for this month.</p>}
                    {pageCount > 1 ? (
                        <nav aria-label="Tour pages" className="flex flex-wrap gap-2">
                            {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                                <Link
                                    key={number}
                                    to={pagePath(number)}
                                    aria-label={`Page ${number}`}
                                    aria-current={page === number ? "page" : undefined}
                                    className="rounded border border-gray-300 px-3 py-2 aria-[current=page]:bg-slate-800 aria-[current=page]:text-white"
                                >
                                    {number}
                                </Link>
                            ))}
                        </nav>
                    ) : null}
                </section>
                <TourSidebar month={month?.value ?? ""} />
            </div>
        </PageLayout>
    );
}
