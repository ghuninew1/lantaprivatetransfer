import { Link } from "react-router-dom";
import { homeReference } from "./homeData";

export default function Home() {
    const { business, content, headings, vehicles, articles } = homeReference;
    return (
        <div className="home-page">
            <p className="home-reference-notice">Reference preview only — business details, services and prices require review before publication.</p>
            <section className="home-hero">
                <div className="home-container home-hero-inner">
                    <div className="home-booking-panel">
                        <h2>{content.quickForm.join(" / ")}</h2>
                        <p>Reference price form preview</p>
                        <Link className="home-button" to="/transferprices">Check transfer prices</Link>
                        <Link className="home-panel-link" to="/booking">Continue to booking →</Link>
                    </div>
                    <div className="home-hero-copy">
                        <p>{business.claims[0]}</p>
                        <h1>{headings[0]}</h1>
                        <p>{business.name}</p>
                    </div>
                </div>
            </section>
            <section className="home-promotion home-container">
                <h2>{headings[1]}</h2>
                <p>{content.promotion}</p>
            </section>
            <section className="home-intro home-container">
                <div className="home-image-placeholder" role="img" aria-label="Transfer photo placeholder">Transfer photo placeholder</div>
                <div className="home-intro-copy">
                    <h2>{headings[2]}</h2>
                    <p>{business.name}</p>
                    {business.claims.map((claim) => <p key={claim}>{claim}</p>)}
                </div>
            </section>
            <section className="home-container home-highlights" aria-label="Reference services">
                {content.services.map((service) => <article key={service}><h3>{service}</h3></article>)}
            </section>
            <section className="home-vehicles home-container">
                <h2>{headings[3]}</h2>
                <div className="home-vehicle-grid">
                    {vehicles.map((vehicle) => (
                        <article key={vehicle.type}>
                            <h3>{vehicle.type}</h3>
                            <div className="home-vehicle-placeholder" role="img" aria-label={`${vehicle.type} photo placeholder`}>Vehicle photo placeholder</div>
                            <p>{vehicle.example}</p>
                            <p>{vehicle.passengers}</p>
                            <p>Large bags: {vehicle.largeBags} · Small bags: {vehicle.smallBags}</p>
                            <p>Reference starting price: {vehicle.startingPriceTHB} THB</p>
                        </article>
                    ))}
                </div>
            </section>
            <section className="home-container home-articles">
                <h2>{headings[4]}</h2>
                <div className="home-vehicle-grid">
                    {articles.map((article) => <article key={article.url}><h3>{article.heading}</h3><p>Details unavailable</p></article>)}
                </div>
            </section>
        </div>
    );
}
