import { Link } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import { referenceContent } from "#data/referenceWebsite";

export default function HowToPay() {
    return (
        <PageLayout title="How to Pay">
            <div className="max-w-3xl space-y-4">
                <p className="rounded bg-amber-50 p-4">Online payment is unavailable. Contact Lanta Private Transfer to confirm payment methods and instructions.</p>
                <h2 className="text-xl font-semibold">Reference payment flow</h2>
                <ol className="list-decimal space-y-2 pl-6">
                    {referenceContent.howToPay.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}
                </ol>
                <Link className="text-blue-700 underline" to="/contact">Contact Lanta Private Transfer</Link>
            </div>
        </PageLayout>
    );
}
