import { useRef, useState } from "react";
import PageLayout from "#components/layout/PageLayout";

// These photos are already used in the project's original gallery.
const photos = [
    "White van parked by a building",
    "Rear cargo area of a van",
    "White van with its sliding door open",
    "White van parked beside a road",
    "Red fabric seats inside a van",
    "Van interior with blue lighting seen from behind",
    "Cream passenger seats with blue and gold lighting",
    "Gray passenger seats inside a van",
    "Gray van seats and illuminated entry step",
    "White SUV parked indoors",
    "Front seatbacks with gold interior lighting",
    "Van dashboard and front seats",
    "Front of a silver van near the water",
    "Silver van in a parking area",
    "Tan passenger seats and ceiling lights",
].map((label, index) => ({ src: `/img/g${index + 1}.avif`, label }));

export default function Gallery() {
    const [selected, setSelected] = useState(null);
    const dialog = useRef(null);

    function openPhoto(photo) {
        setSelected(photo);
        dialog.current.showModal();
    }

    return (
        <PageLayout title="Gallery">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {photos.map((photo) => (
                    <li key={photo.src}>
                        <button type="button" className="block w-full cursor-zoom-in rounded" onClick={() => openPhoto(photo)} aria-label={`View larger image of ${photo.label.toLowerCase()}`}>
                            <img src={photo.src} alt={photo.label} loading="lazy" className="aspect-[4/3] w-full rounded bg-slate-100 object-cover" />
                        </button>
                    </li>
                ))}
            </ul>
            <dialog ref={dialog} aria-label="Enlarged gallery photo" className="m-auto max-w-[calc(100%-2rem)] rounded bg-slate-900 p-4 text-white backdrop:bg-black/75">
                <form method="dialog" className="mb-3 text-right">
                    <button type="submit" className="cursor-pointer rounded bg-slate-700 px-3 py-2">Close photo</button>
                </form>
                {selected ? <img src={selected.src} alt={selected.label} className="max-h-[75dvh] object-contain" /> : null}
            </dialog>
        </PageLayout>
    );
}
