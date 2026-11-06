import { titleCase } from "./referenceForms.js";

export const contact = {
    "sourceUrl": "https://www.krabibesttransfer.com/contact.php",
    "status": "verified",
    "fields": [
      "name",
      "email",
      "phone",
      "subject",
      "verify code",
      "message"
    ],
    "messageFieldStatus": "verified in HTML",
    "map": "Embedded Google map",
    "submissionStatus": "notVerified"
  };

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
