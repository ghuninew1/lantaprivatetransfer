import { Link } from "react-router-dom";
import ReferenceImage from "#components/ReferenceImage";
import { referenceImages } from "#data/referenceImages";
import { homeReference } from "./homeData";

const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });

export default function Home() {
    const { business, content, headings, vehicles, articles, quickValues, heroHeading, services, statistics } = homeReference;
    return (
        <div className="home-page">
            <section className="home-hero">
                {referenceImages.hero.src && <ReferenceImage image={referenceImages.hero} className="home-hero-image" priority />}
                <div className="home-container home-hero-inner">
                    <div className="home-booking-panel">
                        <dl className="home-quick-fields">
                            {content.quickForm.map((label, index) => (
                                <div key={label}><dt>{label}</dt><dd>{quickValues[index]}</dd></div>
                            ))}
                        </dl>
                        <div className="home-quick-actions">
                            <Link className="home-button" to="/booking">Book now</Link>
                            <Link className="home-panel-link" to="/transferprices">Check transfer prices</Link>
                        </div>
                    </div>
                    <div className="home-hero-copy">
                        <p>Passenger safety comes first</p>
                        <h1>{heroHeading}</h1>
                        <p className="home-hero-promotion">{content.promotion}</p>
                        <p>{business.claims[0]}</p>
                        <p className="home-preview-label">Reference preview · rates and services belong to {business.name}.</p>
                    </div>
                </div>
            </section>
            <section className="home-intro home-container">
                <ReferenceImage image={referenceImages.welcome} className="home-welcome-image" />
                <div className="home-intro-copy">
                    <h2>Welcome to <span>{business.name}</span></h2>
                    {business.claims.map((claim) => <p key={claim}>{claim}</p>)}
                    <Link to="/transferprices">Explore the reference routes</Link>
                </div>
            </section>
            <section aria-label="Reference services">
                <div className="home-container home-highlights">
                    {services.map(({ label, summary }, index) => (
                        <article key={label}>
                            {referenceImages.features[index]?.src && <ReferenceImage image={referenceImages.features[index]} className="home-feature-icon" />}
                            <h3>{label}</h3>
                            <p>{summary}</p>
                        </article>
                    ))}
                </div>
                {referenceImages.fleet.src && <ReferenceImage image={referenceImages.fleet} className="home-fleet-image" />}
            </section>
            <section className="home-vehicles home-container">
                <h2>{headings[3]}</h2>
                <div className="home-vehicle-grid">
                    {vehicles.map((vehicle) => (
                        <article key={vehicle.type}>
                            <h3>{vehicle.example}</h3>
                            <p className="home-start-price">Start {vehicle.startingPriceTHB} THB</p>
                            <ReferenceImage image={referenceImages.vehicles[vehicle.example]} className="home-vehicle-image" />
                            <p>{vehicle.type}</p>
                            <p>{vehicle.passengers}</p>
                            <p>Large bags: {vehicle.largeBags} · Small bags: {vehicle.smallBags}</p>
                            <Link to="/booking">Book now</Link>
                        </article>
                    ))}
                </div>
            </section>
            <section aria-label="Reference statistics" className="home-container home-statistics">
                {statistics.map((label) => <p key={label}><span aria-label="Unavailable">—</span>{label}</p>)}
            </section>
            <section className="home-articles">
                <div className="home-container">
                    <h2>{headings[4]}</h2>
                    <div className="home-vehicle-grid">
                        {articles.map(({ id, title, date, image, to }) => (
                            <article key={id}>
                                <time dateTime={date}>{dateFormat.format(new Date(date))}</time>
                                <ReferenceImage image={image} className="home-article-image" />
                                <h3>{title}</h3>
                                <Link aria-label={`Read more about ${title}`} to={to}>Read more</Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
