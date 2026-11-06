import { titleCase } from "./referenceForms.js";

export const booking = {
    "sourceUrl": "https://www.krabibesttransfer.com/booking.php",
    "status": "verified",
    "fields": [
      "prefix",
      "first name",
      "last name",
      "phone",
      "email",
      "journey type",
      "from",
      "to",
      "hotel name",
      "hotel destination",
      "vehicle type",
      "number of vehicles",
      "passengers",
      "pickup date",
      "pickup time",
      "price",
      "total cost",
      "remark"
    ],
    "initialSelectOptions": [
      {
        "name": "input_prefix",
        "options": [
          "Select",
          "Mr.",
          "Ms.",
          "Mrs."
        ]
      },
      {
        "name": "input_round",
        "options": [
          "One-way",
          "Round-trip (3-5% discount)"
        ]
      },
      {
        "name": "input_locationstart",
        "options": [
          "Select From",
          "Krabi Airport",
          "All Phuket hotel",
          "Ao Luek",
          "Ao nammao Pier - Railay beach ( Krabi )",
          "Ao nang Beach ( Krabi )",
          "Ao Por ( Phuket )",
          "Bang Tao Beach ( Phuket )",
          "Central Krabi",
          "Chalong ( Phuket )",
          "Chumphon",
          "City Tour Phuket",
          "Din Daeng Doi",
          "Donsak Pier ( Suratthani )",
          "Had Yai Airport",
          "Had Yao ( Krabi )",
          "Hadyai",
          "Half Day Tour",
          "Hua Hin",
          "Kalim Beach ( Phuket )",
          "Kamala Beach ( Phuket )",
          "Kanom (Nakhon si thammarat)",
          "Karon Beach ( Phuket )",
          "Kata Beach ( Phuket )",
          "Kathu ( Phuket )",
          "Khao Lak ( Phang nga )",
          "Khao Sok ( Suratthani )",
          "Khao Thong Hill",
          "Klong Chilat Pier ( Krabi )",
          "Klong Muang (Nong Thale) ( Krabi )",
          "Klong Thom",
          "Koh Lanta (Includes Ferry tickets)",
          "Koh Samui (Inc.Ferry)",
          "Krabi Airport",
          "Krabi Night market",
          "Krabi Town",
          "Kuan Tungku Pier",
          "Laem Kruat Pier ( Krabi )",
          "Laem Panwa ( Phuket )",
          "Laguna ( Phuket )",
          "Layan Beach ( Phuket )",
          "Mai Khao Beach ( Phuket )",
          "Nai Harn Beach ( Phuket )",
          "Nai Thon Beach ( Phuket )",
          "Nai Yang Beach ( Phuket )",
          "Natai Phang nga",
          "Night market ( Krabi Town )",
          "Nopparat Thara Beach ( Krabi )",
          "Nuea Khlong",
          "One day : Krabi",
          "Pak Meng Pier",
          "Pakbara Pier ( Satun )",
          "Patong Beach ( Phuket )",
          "Patthalung",
          "Phang Nga",
          "Phuket Airport",
          "Phuket Fantasea",
          "Phuket Town",
          "Rassada pier",
          "Ratchaprapha (Suratthani)",
          "Rawai Beach ( Phuket )",
          "Samet nangshe",
          "Siray ( Phuket )",
          "Surat Thani",
          "Surin Beach ( Phuket )",
          "Tammalang Pier ( Satun )",
          "Thalane ( Krabi )",
          "Thammalang pier Satun",
          "Thap Lamu Pier",
          "Trang Airport",
          "Trang Town",
          "Tri Trang Beach ( Phuket )",
          "Tubkaak Beach ( Krabi )"
        ]
      },
      {
        "name": "input_locationend",
        "options": [
          "Select Destination",
          "All Phuket hotel",
          "Ao Luek",
          "Ao nammao Pier - Railay beach ( Krabi )",
          "Ao nang Beach ( Krabi )",
          "Ao Por ( Phuket )",
          "Bang Tao Beach ( Phuket )",
          "Central Krabi",
          "Chalong ( Phuket )",
          "Chumphon",
          "City Tour Phuket",
          "Din Daeng Doi",
          "Donsak Pier ( Suratthani )",
          "Had Yai Airport",
          "Had Yao ( Krabi )",
          "Hadyai",
          "Half Day Tour",
          "Hua Hin",
          "Kalim Beach ( Phuket )",
          "Kamala Beach ( Phuket )",
          "Kanom (Nakhon si thammarat)",
          "Karon Beach ( Phuket )",
          "Kata Beach ( Phuket )",
          "Kathu ( Phuket )",
          "Khao Lak ( Phang nga )",
          "Khao Sok ( Suratthani )",
          "Khao Thong Hill",
          "Klong Chilat Pier ( Krabi )",
          "Klong Muang (Nong Thale) ( Krabi )",
          "Klong Thom",
          "Koh Lanta (Includes Ferry tickets)",
          "Koh Samui (Inc.Ferry)",
          "Krabi Airport",
          "Krabi Night market",
          "Krabi Town",
          "Kuan Tungku Pier",
          "Laem Kruat Pier ( Krabi )",
          "Laem Panwa ( Phuket )",
          "Laguna ( Phuket )",
          "Layan Beach ( Phuket )",
          "Mai Khao Beach ( Phuket )",
          "Nai Harn Beach ( Phuket )",
          "Nai Thon Beach ( Phuket )",
          "Nai Yang Beach ( Phuket )",
          "Natai Phang nga",
          "Night market ( Krabi Town )",
          "Nopparat Thara Beach ( Krabi )",
          "Nuea Khlong",
          "One day : Krabi",
          "Pak Meng Pier",
          "Pakbara Pier ( Satun )",
          "Patong Beach ( Phuket )",
          "Patthalung",
          "Phang Nga",
          "Phuket Airport",
          "Phuket Fantasea",
          "Phuket Town",
          "Rassada pier",
          "Ratchaprapha (Suratthani)",
          "Rawai Beach ( Phuket )",
          "Samet nangshe",
          "Siray ( Phuket )",
          "Surat Thani",
          "Surin Beach ( Phuket )",
          "Tammalang Pier ( Satun )",
          "Thalane ( Krabi )",
          "Thammalang pier Satun",
          "Thap Lamu Pier",
          "Trang Airport",
          "Trang Town",
          "Tri Trang Beach ( Phuket )",
          "Tubkaak Beach ( Krabi )"
        ]
      },
      {
        "name": "input_car",
        "options": [
          "Standard Car",
          "Luxury SUV",
          "Family Van"
        ]
      },
      {
        "name": "input_count",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ]
      },
      {
        "name": "input_passengers",
        "options": [
          "Select number",
          "1",
          "2",
          "3"
        ]
      }
    ],
    "inputFields": [
      {
        "name": "input_fname",
        "type": "text",
        "placeholder": "Enter Your First name"
      },
      {
        "name": "input_lname",
        "type": "text",
        "placeholder": "Enter Your Last name"
      },
      {
        "name": "input_phone",
        "type": "text",
        "placeholder": "+(01) xxx - xxx - xx"
      },
      {
        "name": "input_email",
        "type": "email",
        "placeholder": "Your E-Mail"
      },
      {
        "name": "input_hotel",
        "type": "text",
        "placeholder": "Enter Your Hotel Name"
      },
      {
        "name": "input_hoteldestination",
        "type": "text",
        "placeholder": "Enter Hotel Name In Destination"
      },
      {
        "name": "input_pickupdate",
        "type": "text",
        "placeholder": ""
      },
      {
        "name": "input_pickuptime",
        "type": "text",
        "placeholder": ""
      },
      {
        "name": "input_price",
        "type": "text",
        "placeholder": ""
      },
      {
        "name": "input_total",
        "type": "text",
        "placeholder": ""
      },
      {
        "name": "input_remark",
        "type": "text",
        "placeholder": "Enter Your Remark"
      }
    ],
    "behaviorStatus": "notVerified",
    "notes": [
      "Price and total are initially readonly and zero in HTML.",
      "Options and fields may change based on selections; behavior not tested."
    ]
  };

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
