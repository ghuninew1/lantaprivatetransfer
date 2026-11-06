export default function ReferenceImage({ image, className, priority = false }) {
    if (!image?.src) {
        return <div className={className}>{image?.needed ?? "Photo pending"}</div>;
    }

    return (
        <img
            className={className}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding={priority ? undefined : "async"}
        />
    );
}
