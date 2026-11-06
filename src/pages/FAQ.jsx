import { Link } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import { referenceContent } from "#data/referenceWebsite";

export default function FAQ() {
    return (
        <PageLayout title="FAQ">
            <div className="max-w-3xl space-y-4">
                <p className="rounded bg-amber-50 p-4">These answers summarize Krabi Best Transfer&apos;s published policies for reference. Lanta Private Transfer policies are pending confirmation.</p>
                {referenceContent.faq.items.map(({ topic, summary }) => (
                    <details key={topic} className="rounded border border-gray-200">
                        <summary className="cursor-pointer p-4 font-semibold">{topic}</summary>
                        <p className="px-4 pb-4 text-gray-700">{summary}</p>
                    </details>
                ))}
                <Link className="text-blue-700 underline" to="/contact">Ask about your trip</Link>
            </div>
        </PageLayout>
    );
}
