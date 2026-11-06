import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { referenceBusiness } from "#data/referenceSite";
import { businessContact } from "#data/businessContact";

export default function Header({ isHome }) {
    const { address, phone, phoneHref, email, mapHref } = businessContact;

    return (
        <header className="home-reference-header">
            <div className="home-container home-header-inner">
                <span className="home-header-label">{isHome ? referenceBusiness.name : businessContact.name}</span>
                <div className="home-header-contacts">
                    {isHome ? (
                        <>
                            <span><MapPinIcon aria-hidden="true" />{referenceBusiness.address}</span>
                            <span><PhoneIcon aria-hidden="true" />{referenceBusiness.phones.join(" / ")}</span>
                        </>
                    ) : (
                        <>
                            <a href={mapHref} target="_blank" rel="noopener noreferrer"><MapPinIcon aria-hidden="true" />{address}</a>
                            <a href={phoneHref}><PhoneIcon aria-hidden="true" />{phone}</a>
                            <a href={`mailto:${email}`}><EnvelopeIcon aria-hidden="true" />{email}</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
