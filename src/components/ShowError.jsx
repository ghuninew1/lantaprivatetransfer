const ShowError = ({ error = "" }) => {
    if (!error) return null;
    return <div className="absolute top-0 text-sm text-red-500">{error}</div>;
};

export default ShowError;
