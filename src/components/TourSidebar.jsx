import { Link } from "react-router-dom";
import { featuredTours, referenceCategoryYear, referenceMonths, tourPath } from "#data/referenceTours";

export default function TourSidebar({ month }) {
    return (
        <aside className="space-y-6 rounded border border-gray-200 p-4">
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Categories</h2>
                <ul className="space-y-1">
                    <li><Link className="text-blue-700 underline" to="/tour-packages" aria-current={month === "" ? "page" : undefined}>All dates</Link></li>
                    {referenceMonths.map(({ value, label }) => (
                        <li key={value}>
                            <Link className="text-blue-700 underline" to={`/tour-packages?inputmonth=${value}`} aria-current={month === value ? "page" : undefined}>
                                {label} {referenceCategoryYear}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Popular on the reference site</h2>
                <ul className="space-y-2">
                    {featuredTours.map(({ id, title }) => (
                        <li key={id}><Link className="block text-blue-700 underline" to={tourPath(id)}>{title}</Link></li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
