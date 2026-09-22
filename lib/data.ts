export const phone = "9194702099";
export const whatsapp = "https://wa.me/9194702099";

export type BktProduct = {
  id: string;
  name: string;
  size: string;
  type: string;
  application: string;
  machinery: string;
  image: string;
};

const img1 = "https://storage.googleapis.com/bkt-prod-storage/43d2798f-59c8-44ea-b8c4-8af13852515b";
const img2 = "https://storage.googleapis.com/bkt-prod-storage/8ba4b1d7-4efa-417b-969d-03ecd80e9c70";
const img3 = "https://storage.googleapis.com/bkt-prod-storage/a0585e34-d1ef-40a2-84f1-c00828fec017";

export const bktProducts: BktProduct[] = [
  ["10.00-20 18PR BKT STEER GRIP II", "10.00-20 18PR", "BIAS", "Construction / OTR", "Steer applications", img1],
  ["10.00-20 16PR BKT CON STEER II", "10.00-20 16PR", "BIAS", "Construction / OTR", "Steer applications", img1],
  ["10.00-20 18PR BKT ROCK GRIP II", "10.00-20 18PR", "BIAS", "Construction / Quarry", "Heavy-duty OTR equipment", img2],
  ["10.00-20 18PR BKT XL GRIP ULTRA II", "10.00-20 18PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["11.00-20 18PR BKT STEER GRIP II", "11.00-20 18PR", "BIAS", "Construction / OTR", "Steer applications", img1],
  ["11.00-20 18PR BKT ROCK GRIP II", "11.00-20 18PR", "BIAS", "Construction / Quarry", "Heavy-duty OTR equipment", img2],
  ["11.00-20 18PR BKT XL GRIP ULTRA II", "11.00-20 18PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["12.00-20 20PR BKT XL GRIP ULTRA II", "12.00-20 20PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["9.00-16 16PR BKT BK6060 IND II", "9.00-16 16PR", "BIAS", "Industrial / OTR", "Industrial equipment", img1],
  ["9.00-16 16PR BKT XL GRIP II", "9.00-16 16PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["14.00-25 20PR BKT LOADER PLUS L-3 II", "14.00-25 20PR", "BIAS • L-3", "Loading / Earthmoving", "Wheel loaders", img3],
  ["16.9-28 12PR BKT AT621 IND E II", "16.9-28 12PR", "BIAS", "Industrial / OTR", "Industrial equipment", img1],
  ["16.9-28 12PR BKT AT625 IND E II", "16.9-28 12PR", "BIAS", "Industrial / OTR", "Industrial equipment", img1],
  ["16.9-28 12PR BKT XL GRIP II", "16.9-28 12PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["12.5/80-18 16PR BKT AT621 E II", "12.5/80-18 16PR", "BIAS", "Industrial / OTR", "Industrial equipment", img1],
  ["12.5/80-18 16PR BKT XL GRIP II", "12.5/80-18 16PR", "BIAS", "Construction / OTR", "Heavy-duty equipment", img2],
  ["16.0/70-20 16PR BKT XL GRIP TL", "16.0/70-20 16PR", "RADIAL", "Construction / OTR", "Heavy-duty equipment", img2],
  ["13.00-24 12PR BKT SUPER GRADER E II", "13.00-24 12PR", "BIAS", "Grading", "Motor graders", img3],
  ["13.00-24 16PR BKT SUPER GRADER E II", "13.00-24 16PR", "BIAS", "Grading", "Motor graders", img3],
  ["13.00-24 16PR BKT XL GRIP G-3 II", "13.00-24 16PR", "BIAS • G-3", "Grading / OTR", "Motor graders", img2],
  ["14.00-24 16PR BKT SUPER GRADER E II", "14.00-24 16PR", "BIAS", "Grading", "Motor graders", img3],
  ["14.00-24 16PR BKT XL GRIP G-3 II", "14.00-24 16PR", "BIAS • G-3", "Grading / OTR", "Motor graders", img2],
  ["17.5-25 20PR BKT LOADER PLUS L-3 TLBD", "17.5-25 20PR", "BIAS • L-3", "Loading / Earthmoving", "Wheel loaders", img3],
  ["14.00-25 20PR BKT EM937 II", "14.00-25 20PR", "BIAS • E3", "Surface Mining", "Rigid dump trucks", img3],
  ["17.5-25 20PR BKT XL GRIP TL", "17.5-25 20PR", "RADIAL", "Construction / OTR", "Heavy-duty equipment", img2],
  ["23.5-25 20PR BKT XL GRIP TL", "23.5-25 20PR", "RADIAL", "Construction / OTR", "Heavy-duty equipment", img2],
  ["23.1-26 12PR BKT TR390 E TL", "23.1-26 12PR", "BIAS", "OTR / Earthmoving", "Off-highway equipment", img1],
  ["445/95R25 BKT AIROMAX AM27 174F", "445/95R25", "RADIAL", "Heavy OTR", "Heavy-duty equipment", img2],
  ["385/95R24 BKT AIROMAX AM27 170F II", "385/95R24", "RADIAL", "Heavy OTR", "Heavy-duty equipment", img2],
  ["385/95R25 BKT AIROMAX AM27 170F", "385/95R25", "RADIAL", "Heavy OTR", "Heavy-duty equipment", img2],
  ["23.5R25 BKT EARTHMAX SR30 E-3** / L-3* CR", "23.5R25", "RADIAL • E-3* / L-3*", "Construction / Earthmoving", "Loader • Dozer • Grader", img1],
  ["17.5R25 BKT EARTHMAX SR30 E-3** / L-3* CR", "17.5R25", "RADIAL • E-3* / L-3*", "Construction / Earthmoving", "Loader • Dozer • Grader", img1],
  ["23.5R25 BKT EMAX SR LOADER E-3* / L-3* CR", "23.5R25", "RADIAL • E-3* / L-3*", "Loading / Earthmoving", "Wheel loaders", img1]
].map(([name, size, type, application, machinery, image], index) => ({
  id: `${String(index + 1).padStart(2, "0")}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`,
  name,
  size,
  type,
  application,
  machinery,
  image
}));

export const featuredProducts = [bktProducts[0], bktProducts[10], bktProducts[30]];

export const mksServices = [
  ["01", "BKT OTR Tyres", "OTR tyre solutions for construction, mining, earthmoving and industrial applications."],
  ["02", "Construction Equipment", "Construction machinery distribution and customer support. Exact machine range will be added as confirmed."],
  ["03", "Genuine OEM Spare Parts", "Genuine OEM spare parts kept in stock, with customer orders accepted for dispatch by courier or public transport."],
  ["04", "Machine Services", "Field service, machine inspection, hydraulic repairs and emergency/breakdown support."],
  ["05", "Volvoline Lubricants", "Hydraulic oil, engine oil, gear oil, transmission oil, grease and coolant."]
];

export const applications = [
  ["01", "Construction", "OTR tyre solutions for construction and earthmoving operations."],
  ["02", "Mining & Quarry", "Heavy-duty tyre solutions for mining, quarry and off-the-road applications."],
  ["03", "Earthmoving", "BKT OTR options for applicable earthmoving machinery and challenging surfaces."],
  ["04", "Infrastructure", "Tyre solutions for road construction and infrastructure projects."],
  ["05", "Industrial", "OTR tyre solutions for suitable industrial and heavy-duty equipment."]
];

export const faqs = [
  ["What are BKT OTR tyres?", "BKT Off-The-Road (OTR) tyres are tyres designed for heavy construction and industrial vehicles and equipment that operate off the road. They are used across demanding environments such as construction, mining, quarrying, earthmoving and infrastructure work."],
  ["Do you supply BKT OTR tyres across Uttar Pradesh?", "Yes. M/s Madhwendra Authorized Distributor BKT, operated by MKS Concord LLP, supplies BKT OTR tyres across Uttar Pradesh. Our head office is in Gorakhpur."],
  ["How do I choose the right BKT OTR tyre?", "Start with your vehicle or equipment type and tyre size. The suitable tyre also depends on the application and working conditions. Our product range shows the vehicle or equipment type where available. If you cannot find your requirement, contact us for assistance."],
  ["Can I see tyre prices on the website?", "No. Tyre prices are not displayed publicly. Tell us which BKT OTR tyre or vehicle requirement you are looking for through WhatsApp or call, and we can provide the applicable quotation."],
  ["How can I request a quotation?", "Send your tyre size or model, vehicle/equipment type, application and quantity through WhatsApp or call MKS Concord LLP. Our team can check the requirement and send you a quotation."],
  ["What if my vehicle or tyre is not listed?", "The online range is intended to help you identify suitable BKT OTR tyre options. If your vehicle, equipment or tyre requirement is not listed, contact us and our team can help with your enquiry."],
  ["Where is MKS Concord LLP based?", "The head office of MKS Concord LLP is in Gorakhpur, Uttar Pradesh. We supply BKT OTR tyres across Uttar Pradesh."]
];
