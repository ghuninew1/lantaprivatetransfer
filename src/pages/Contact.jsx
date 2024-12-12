import { useRef, useState } from "react";
import Iframe from "../components/Iframe";
import { PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/outline";


export default function Contact() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        if (!data.name || !data.email || !data.subject || !data.message) {
            messageRef.current.value = "Please fill all the name and email and subject and message";
            setShow(true);
            return;
        } else {
            fetch("https://getform.io/f/e4109843-da24-41ca-b68c-8856bfe7a695", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            messageRef.current.value = "Thank you for your message";
            setShow(true);
            nameRef.current.value = "";
            emailRef.current.value = "";
            subjectRef.current.value = "";
        }
    };
    const handleClose = () => {
        setShow(false);
        messageRef.current.value = "";
    };

    const ShowMessage = () => {
        return (
            <div className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 rounded-md bg-slate-800 p-5">
                <div className="text-center text-xl text-lime-700">{messageRef.current.value}</div>
                <button
                    className="rounded-md bg-lime-700 p-2 text-white transition-all hover:bg-lime-900"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        );
    };
    return (
        <>
            <div className="flex max-w-full flex-col items-center justify-center">
                <div className="mb-10 flex h-44 w-full flex-col items-center justify-end bg-[url('/img/bg7.avif')] bg-cover bg-center bg-no-repeat lg:h-60 box-shadow">
                    <h1 className="mb-2 rounded-md p-2 text-4xl font-bold uppercase text-slate-200 backdrop-blur-sm z-0">
                        Contact
                    </h1>
                </div>
            </div>
            <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 mb-10 animate-zoomIn">
                <div className="flex flex-col items-center justify-center">
                    <MapPinIcon className="h-10 w-10 text-red-600" />
                    <p className="text-xl font-bold mb-3">Address</p>
                    <p className="text-lg ">29 Moo 2, Krabi, Thailand</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <PhoneIcon className="h-10 w-10 text-red-600" />
                    <p className="text-xl font-bold mb-3">Phone Number</p>
                    <p className="text-lg ">+6694 579 6331</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <EnvelopeIcon className="h-10 w-10 text-red-600" />
                    <p className="text-xl font-bold mb-3">Email</p>
                    <p className="text-lg ">xxxx@gmail.com</p>
                </div>
            </div>
            <div className="relative mx-auto mb-10 grid w-full max-w-[1100px] grid-cols-1 items-center px-2 lg:grid-cols-2 lg:px-5">
                {show && <ShowMessage />}

                <div className="flex h-full animate-fadeInLeft flex-col items-center justify-center rounded-md border-[#dcbcbc36] p-3 pt-10 shadow-lg lg:border-2 lg:pt-5">
                    <div className="mb-5 text-center text-3xl font-medium text-lime-700 lg:text-4xl">
                        Send Us a Message
                    </div>

                    <form className="mt-3 flex w-full flex-col gap-2 px-3" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="h-10 w-full rounded-md border-2 border-lime-700 p-2 lg:w-1/2"
                                ref={nameRef}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="h-10 w-full rounded-md border-2 border-lime-700 p-2 lg:w-1/2"
                                ref={emailRef}
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="h-10 w-full rounded-md border-2 border-lime-700 p-2"
                            ref={subjectRef}
                        />
                        <textarea
                            type="text"
                            name="message"
                            cols={20}
                            rows={5}
                            placeholder="Message"
                            className="h-20 w-full rounded-md border-2 border-lime-700 p-2"
                            ref={messageRef}
                        ></textarea>
                        <button
                            type="submit"
                            className="mx-auto mt-2 h-10 w-full rounded-md border-2 border-lime-400 bg-lime-600 text-xl font-bold transition-all hover:bg-lime-900 hover:text-white lg:w-[60%]"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="flex h-full animate-fadeInRight flex-col items-center justify-center gap-2 rounded-md border-[#dcbcbc36] p-3 lg:ml-1 lg:border-2">
                    <div className="animate-fade aspect-video h-full w-full">
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126550.55307966114!2d98.96736792957384!3d7.607069482299602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304e037c46373b1f%3A0x40223bc2c381ee0!2z4LiV4Liz4Lia4LilIOC4qOC4suC4peC4suC4lOC5iOC4suC4mSDguK3guLPguYDguKDguK3guYDguIHguLLguLDguKXguLHguJnguJXguLIg4LiB4Lij4Liw4Lia4Li14LmI!5e0!3m2!1sth!2sth!4v1733157871640!5m2!1sth!2sth"
                            isOn={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
