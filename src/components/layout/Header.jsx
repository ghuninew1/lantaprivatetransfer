import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { businessContact } from "#data/businessContact";

export default function Header() {
    const { name, address, phone, phoneHref, email, mapHref } = businessContact;

    return (
        <header className="home-reference-header hidden md:block">
            <div className="home-container home-header-inner">
                <span className="home-header-label">{name}</span>
                <div className="home-header-contacts">
                    <a href={mapHref} target="_blank" rel="noopener noreferrer">
                        <MapPinIcon aria-hidden="true" />
                        {address}
                    </a>
                    <a href={phoneHref}>
                        <PhoneIcon aria-hidden="true" />
                        {phone}
                    </a>
                    <a href={`mailto:${email}`}>
                        <EnvelopeIcon aria-hidden="true" />
                        {email}
                    </a>
                </div>
            </div>
        </header>
    );
}
