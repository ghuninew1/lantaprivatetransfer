import { useRef, useState } from "react";
import { flushSync } from "react-dom";
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
    const thumbnail = useRef(null);
    const zoom = useRef(null);

    function animatePhoto(closing) {
        const target = dialog.current;
        const currentTransform = getComputedStyle(target).transform;
        zoom.current?.cancel();

        const sourceRect = thumbnail.current.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        if (!targetRect.width || !targetRect.height) return;

        const offset = `translate(${sourceRect.left - targetRect.left}px, ${sourceRect.top - targetRect.top}px)`;
        const scale = `scale(${sourceRect.width / targetRect.width}, ${sourceRect.height / targetRect.height})`;
        const collapsed = `${offset} ${scale}`;
        zoom.current = target.animate(
            closing ? [{ transform: currentTransform }, { transform: collapsed }] : [{ transform: collapsed }, { transform: "none" }],
            { duration: closing ? 300 : 360, easing: "ease-in-out", fill: "both" },
        );
        return zoom.current;
    }

    function openPhoto(photo, source) {
        thumbnail.current = source;
        flushSync(() => setSelected(photo));
        dialog.current.showModal();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) animatePhoto(false);
    }

    function closePhoto(event) {
        event.preventDefault();
        const target = dialog.current;
        if (target.hasAttribute("data-closing")) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            zoom.current?.cancel();
            target.close();
            return;
        }

        target.setAttribute("data-closing", "");
        const animation = animatePhoto(true);
        function finish() {
            target.close();
            target.removeAttribute("data-closing");
            animation?.cancel();
        }
        if (animation) animation.onfinish = finish;
        else finish();
    }

    return (
        <PageLayout title="Gallery">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {photos.map((photo) => (
                    <li key={photo.src}>
                        <button type="button" className="block w-full cursor-zoom-in rounded" onClick={(event) => openPhoto(photo, event.currentTarget.querySelector("img"))} aria-label={`View larger image of ${photo.label.toLowerCase()}`}>
                            <img src={photo.src} alt={photo.label} loading="lazy" className="aspect-[4/3] w-full rounded bg-slate-100 object-cover" />
                        </button>
                    </li>
                ))}
            </ul>
            <dialog ref={dialog} onCancel={closePhoto} aria-label="Enlarged gallery photo" className="m-auto max-w-[calc(100%-2rem)] origin-top-left overflow-hidden rounded bg-slate-900 p-4 text-white backdrop:bg-black/75 backdrop:transition-colors backdrop:duration-300 data-closing:backdrop:bg-transparent">
                <form method="dialog" onSubmit={closePhoto} className="mb-3 text-right">
                    <button type="submit" className="cursor-pointer rounded bg-slate-700 px-3 py-2">Close photo</button>
                </form>
                {selected ? <img src={selected.src} alt={selected.label} className="max-h-[75dvh] object-contain" /> : null}
            </dialog>
        </PageLayout>
    );
}
