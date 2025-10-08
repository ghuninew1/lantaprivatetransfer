import ReactDOM from "react-dom";

const Portal = ({ children, isOpen=false, closeModal }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            onClick={closeModal}
            className={` z-10 bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center
            ${isOpen && "animate-zoom"}`}
        >
            {children}
        </div>,
        document.getElementById("portal")
    );
};

export default Portal;
