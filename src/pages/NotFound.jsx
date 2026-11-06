import { Link } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";

export default function NotFound() {
    return (
        <PageLayout title="Page not found">
            <p>The address you opened is unavailable.</p>
            <Link className="home-button" to="/">Back to Home</Link>
        </PageLayout>
    );
}
