import { referenceBusiness } from "#data/referenceWebsite";
import { businessContact } from "#data/businessContact";

export default function Header({ isHome }) {
    const { address, phone, phoneHref, email, mapHref } = businessContact;

    return (
        <header className="home-reference-header">
            <div className="home-container">
                {isHome ? (
                    <>
                        <span>{referenceBusiness.address}</span>
                        <span>{referenceBusiness.phones.join(" / ")}</span>
                    </>
                ) : (
                    <>
                        <a href={mapHref} target="_blank" rel="noopener noreferrer">{address}</a>
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                            <a href={phoneHref}>{phone}</a>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
