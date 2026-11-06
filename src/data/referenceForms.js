import { referenceContent } from "./referenceWebsite.js";

const { booking, contact } = referenceContent;
const bookingOptions = new Map(booking.initialSelectOptions.map(({ name, options }) => [name, options]));
const bookingInputs = new Map(booking.inputFields.map(({ name, ...input }) => [name, input]));

const bookingControls = {
    prefix: { name: "input_prefix", autoComplete: "honorific-prefix" },
    "first name": { name: "input_fname", required: true, autoComplete: "given-name" },
    "last name": { name: "input_lname", required: true, autoComplete: "family-name" },
    phone: { name: "input_phone", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
    email: { name: "input_email", label: "Email", required: true, autoComplete: "email" },
    "journey type": { name: "input_round", required: true, withoutPromotion: true },
    from: { name: "input_locationstart", required: true },
    to: { name: "input_locationend", required: true },
    "hotel name": { name: "input_hotel" },
    "hotel destination": { name: "input_hoteldestination" },
    "vehicle type": { name: "input_car", required: true },
    "number of vehicles": { name: "input_count", required: true },
    passengers: { name: "input_passengers", required: true },
    "pickup date": { name: "input_pickupdate", type: "date", required: true },
    "pickup time": { name: "input_pickuptime", type: "time", required: true },
    price: { name: "input_price", readOnly: true },
    "total cost": { name: "input_total", readOnly: true },
    remark: { name: "input_remark", type: "textarea" },
};

function titleCase(value) {
    return value.replace(/\b\w/g, (initial) => initial.toUpperCase());
}

export const bookingFields = booking.fields.map((key) => {
    const { withoutPromotion, ...control } = bookingControls[key];
    const sourceOptions = bookingOptions.get(control.name);
    const choices = withoutPromotion ? sourceOptions.map((option) => option.split(" (")[0]) : sourceOptions;
    const hasPrompt = choices?.[0].startsWith("Select");

    return {
        label: titleCase(key),
        ...bookingInputs.get(control.name),
        ...control,
        options: choices ? [...new Set(hasPrompt ? choices.slice(1) : choices)] : undefined,
        prompt: hasPrompt ? choices[0] : undefined,
    };
});

const contactControls = {
    name: { required: true, autoComplete: "name" },
    email: { type: "email", required: true, autoComplete: "email" },
    phone: { type: "tel", autoComplete: "tel" },
    subject: { required: true },
    message: { type: "textarea", required: true },
    "verify code": { name: "verificationCode", disabled: true, placeholder: "Unavailable in this preview" },
};

export const contactFields = contact.fields.map((key) => ({
    name: key,
    label: titleCase(key),
    ...contactControls[key],
}));
