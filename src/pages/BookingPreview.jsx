import { Link } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import PreviewForm, { FormField } from "#components/PreviewForm";
import { bookingFields } from "#data/referenceForms";

export default function BookingPreview() {
    return (
        <PageLayout title="Booking">
            <div className="mx-auto max-w-3xl space-y-4">
                <p>Online reservations and quotes are unavailable in this preview. Route and vehicle choices are from the reference site.</p>
                <PreviewForm label="Check booking form" status="Form checks passed. No reservation was created.">
                    {bookingFields.map((field) => (
                        <FormField key={field.name} field={field} defaultValue={field.readOnly ? "Pending confirmation" : undefined} />
                    ))}
                </PreviewForm>
                <Link className="text-blue-700 underline" to="/contact">Contact Lanta Private Transfer</Link>
            </div>
        </PageLayout>
    );
}
