const Iframe = ({ src, isOn = false }) => {
    if (!isOn) return null;
    return (
        <iframe
            src={src}
            width="100%"
            height="100%"
            title=""
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture web-share"
            allowFullScreen
            loading="lazy"
        ></iframe>
    );
};

export default Iframe;
