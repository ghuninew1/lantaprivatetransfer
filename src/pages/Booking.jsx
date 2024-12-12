import { useInputs } from "#components/useInputs";

// import { cx } from "#utils";

export default function Booking() {
    const firstName = useInputs("FirstName", "", { type: "text" });
    const lastName = useInputs("LastName", "", { type: "text" });
    const email = useInputs("Email", "", { type: "email" });
    const phone = useInputs("Phone Number", "", { type: "tel" });
    const pickupDate = useInputs("Pickup Date", "", { type: "date", defaultValue: "2025-01-01" });
    const pickupTime = useInputs("Pickup Time", "", { type: "time", defaultValue: "12:00" });
    const price = useInputs("Price", "", { type: "number" });
    const totalCost = useInputs("Total Cost", "", { type: "number" });
    const hotelName = useInputs("Hotel Name", "", { type: "text" });
    const hotelDestination = useInputs("Hotel Destination", "", { type: "text" });

    const toData = ["Lanta", "Antalya", "Istanbul", "Budapest", "Rome"];
    const fromData = ["Ao Nammao Pier", "Ao Nang Beach", "Donsak Pier", "Had Yao", "Krabi"];
    const numberofVehicles = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const passengers = ["1", "2", "3", "4", "5", "6"];

    return (
        <div className="flex max-w-full flex-col items-center justify-center">
            <div className="box-shadow mb-10 flex h-44 w-full flex-col items-center justify-end bg-[url('/img/bg7.jpg')] bg-cover bg-center bg-no-repeat lg:h-60">
                <h1 className="mb-2 rounded-md p-2 text-4xl font-bold uppercase text-slate-200 backdrop-blur-sm">
                    Booking
                </h1>
            </div>

            <div className="mb-10 flex w-full max-w-screen-xl flex-col items-center justify-center">
                <form
                    className="flex w-full flex-col items-center justify-center gap-5 text-xs lg:text-sm"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="m-2 flex w-full items-center justify-start">
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">Prefix</p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="prefix"
                                defaultValue={""}
                            >
                                <option value="Select">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                            </select>
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                First Name
                            </p>
                            {firstName.input}
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Last Name
                            </p>
                            {lastName.input}
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">Phone</p>
                            {phone.input}
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">Email</p>
                            {email.input}
                        </label>
                    </div>
                    <div className="m-2 flex w-full items-center justify-start">
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Journey Type
                            </p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="Journeytype"
                                defaultValue={""}
                            >
                                <option value="One-Way">One-Way</option>
                                <option value="Round-Trip">Round-Trip</option>
                            </select>
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-start lg:flex-row">
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">From</p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="Journeytype"
                                defaultValue={""}
                            >
                                {fromData.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">To</p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="Journeytype"
                                defaultValue={""}
                            >
                                {toData.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Hotel Name
                            </p>
                            {hotelName.input}
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Hotel Destination
                            </p>
                            {hotelDestination.input}
                        </label>
                    </div>
                    <div className="m-2 flex w-full items-center justify-start">
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Vehicle Type
                            </p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="VehicleType"
                                defaultValue={""}
                            >
                                <option value="Standard Car">Standard Car</option>
                                <option value="Luxury SUV">Luxury SUV</option>
                                <option value="Family Van">Family Van</option>
                            </select>
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-start lg:flex-row">
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Number of Vehicles
                            </p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="numberofvehicles"
                                defaultValue={""}
                            >
                                {numberofVehicles.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="flex w-full items-center justify-start shadow-md lg:w-1/2">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Passengers
                            </p>
                            <select
                                className="m-2 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                name="numberofvehicles"
                                defaultValue={""}
                            >
                                {passengers.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Pickup Date
                            </p>
                            {pickupDate.input}
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Pickup Time
                            </p>
                            {pickupTime.input}
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">Price</p>
                            {price.input}
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Total Cost
                            </p>
                            {totalCost.input}
                        </label>
                    </div>
                    <div className="m-2 flex w-full flex-col items-center justify-center shadow-md lg:flex-row">
                        <label className="m-2 flex w-full items-center justify-center">
                            <p className="m-2 flex w-1/3 flex-col items-end justify-center text-sm font-bold">
                                Remarks
                            </p>
                            <textarea className="m-2 flex h-10 w-full items-center justify-center rounded-md border bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
                        </label>
                        <label className="m-2 flex w-full items-center justify-center">
                            <input
                                className="m-2 flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-green-500 shadow-md hover:bg-green-700"
                                type="submit"
                                value="Book Now"
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}
