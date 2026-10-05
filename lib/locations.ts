export type Location = {
  slug: string;
  name: string;
  region: string;
  type: string;
  address: string;
  shortDescription: string;
  description: string;
  keywords: string[];
};

export const locations: Location[] = [
  {
    slug: "gorakhpur",
    name: "Gorakhpur",
    region: "Uttar Pradesh",
    type: "Head Office",
    address: "Siddhartha Enclave, 162B, adjacent to Lakme Salon, Taramandal, Gorakhpur, Uttar Pradesh 273017",
    shortDescription: "Head office supporting BKT OTR tyre enquiries, construction equipment requirements and customer coordination.",
    description: "MKS Concord LLP operates from its head office in Gorakhpur, supporting customers looking for BKT OTR tyres and construction-equipment solutions across Uttar Pradesh.",
    keywords: ["BKT OTR tyres Gorakhpur", "OTR tyre distributor Gorakhpur", "construction equipment Gorakhpur"]
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    region: "Uttar Pradesh",
    type: "Office / Service Location",
    address: "Feel Dance Center, Hemkunt Dharamkanta, Janaura Rd, Krishna Nagar, Karaundia, Faizabad, Uttar Pradesh 224001",
    shortDescription: "Local customer coordination and support for construction, earthmoving and OTR tyre requirements in the Ayodhya area.",
    description: "MKS Concord LLP supports customers in the Ayodhya area with BKT OTR tyre enquiries and construction-equipment related requirements.",
    keywords: ["BKT OTR tyres Ayodhya", "OTR tyres Ayodhya", "construction equipment Ayodhya"]
  },
  {
    slug: "anpara",
    name: "Anpara",
    region: "Uttar Pradesh",
    type: "Office / Service Location",
    address: "WARD NO 14, VIBHA SHAH, C/O, Beena Rd, near SHAH COMPLEX, MALVIYA NAGAR, Anpara, Uttar Pradesh 231225",
    shortDescription: "Customer support for OTR tyre and construction-equipment requirements in the Anpara area.",
    description: "MKS Concord LLP supports construction, mining and heavy-equipment customers around Anpara with BKT OTR tyre enquiries and related requirements.",
    keywords: ["BKT OTR tyres Anpara", "OTR tyres Anpara", "mining tyres Anpara"]
  }
,  {
    slug: "varanasi",
    name: "Varanasi",
    region: "Uttar Pradesh",
    type: "Office / Service Location",
    address: "Feel Dance Center, Hemkunt Dharamkanta, Janaura Rd, Durgapuri Colony, Karaundia, Faizabad, Uttar Pradesh 224001",
    shortDescription: "Customer coordination for BKT OTR tyre and construction-equipment requirements in the Varanasi area.",
    description: "MKS Concord LLP supports customers in the Varanasi area with BKT OTR tyre enquiries and construction-equipment related requirements.",
    keywords: ["BKT OTR tyres Varanasi", "OTR tyres Varanasi", "construction equipment Varanasi"]
  }
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
