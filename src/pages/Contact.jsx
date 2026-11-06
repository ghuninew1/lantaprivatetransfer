import { useSearchParams } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import PreviewForm, { FormField } from "#components/PreviewForm";
import { businessContact } from "#data/businessContact";
import { contactFields } from "#data/referenceForms";
import { getContactTopic } from "#data/referenceTours";

export default function Contact() {
    const [params] = useSearchParams();
    const topic = getContactTopic(params);
    const { address, phone, phoneHref, email, mapHref, mapEmbed } = businessContact;
    const details = [
        { label: "Address", value: address, href: mapHref },
        { label: "Phone Number", value: phone, href: phoneHref },
        { label: "Email", value: email, href: `mailto:${email}` },
    ];
    const defaults = topic ? { subject: "Tour inquiry", message: `I would like to ask about ${topic.title}.` } : {};

    return (
        <PageLayout title="Contact">
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Get in touch</h2>
                <address className="grid gap-5 rounded border border-gray-200 p-4 not-italic md:grid-cols-3">
                    {details.map(({ label, value, href }) => (
                        <div key={label} className="min-w-0">
                            <p className="font-semibold">{label}</p>
                            <a className="text-blue-700 underline wrap-anywhere" href={href}>{value}</a>
                        </div>
                    ))}
                </address>
            </section>
            <div className="grid items-start gap-8 lg:grid-cols-2">
                <section className="min-w-0 space-y-4">
                    <h2 className="text-xl font-semibold">Send Us a Message</h2>
                    <p>Online message delivery and verification are unavailable. Use the phone or email above to reach Lanta Private Transfer.</p>
                    <PreviewForm key={topic?.id ?? "general"} label="Check contact form" status="Form checks passed. No message was sent.">
                        {contactFields.map((field) => <FormField key={field.name} field={field} defaultValue={defaults[field.name]} />)}
                    </PreviewForm>
                </section>
                <section className="min-w-0 space-y-4">
                    <h2 className="text-xl font-semibold">Location</h2>
                    <iframe src={mapEmbed} title="Map of the Lanta Private Transfer contact location" className="aspect-video w-full rounded border border-gray-200" loading="lazy" />
                </section>
            </div>
        </PageLayout>
    );
}
