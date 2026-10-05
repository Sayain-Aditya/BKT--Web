import { bktProducts, type BktProduct } from "./data";

export type ApplicationLanding = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  match: (product: BktProduct) => boolean;
};

export const applicationLandings: ApplicationLanding[] = [
  { slug: "construction", title: "BKT OTR Tyres for Construction", eyebrow: "CONSTRUCTION", description: "Explore BKT OTR tyre options in the published MKS range for construction and heavy-duty off-road work.", keywords: ["BKT construction tyres", "construction OTR tyres", "BKT OTR tyres construction Uttar Pradesh"], match: p => /construction|heavy-duty|steer/i.test(`${p.application} ${p.machinery} ${p.name}`) },
  { slug: "mining", title: "BKT OTR Tyres for Mining & Quarry", eyebrow: "MINING & QUARRY", description: "Explore BKT OTR options from the current range for mining, quarry and heavy off-road applications.", keywords: ["BKT mining tyres", "BKT quarry tyres", "mining OTR tyres Uttar Pradesh"], match: p => /mining|quarry|surface mining|heavy otr/i.test(`${p.application} ${p.machinery} ${p.name}`) },
  { slug: "earthmoving", title: "BKT OTR Tyres for Earthmoving", eyebrow: "EARTHMOVING", description: "Explore BKT OTR options for applicable loaders, graders, dozers and other earthmoving equipment represented in the current range.", keywords: ["BKT earthmoving tyres", "earthmover tyres", "BKT loader tyres"], match: p => /earthmoving|loading|loader|dozer|grader/i.test(`${p.application} ${p.machinery} ${p.name}`) },
  { slug: "infrastructure", title: "BKT OTR Tyres for Infrastructure", eyebrow: "INFRASTRUCTURE", description: "Explore BKT OTR options relevant to road construction, grading and infrastructure work in the published range.", keywords: ["BKT infrastructure tyres", "road construction tyres", "BKT grader tyres"], match: p => /construction|grading|grader|infrastructure/i.test(`${p.application} ${p.machinery} ${p.name}`) },
  { slug: "industrial", title: "BKT OTR Tyres for Industrial Applications", eyebrow: "INDUSTRIAL", description: "Explore BKT OTR options listed for industrial and heavy-duty equipment applications in the current range.", keywords: ["BKT industrial tyres", "industrial OTR tyres", "BKT tyres industrial equipment"], match: p => /industrial/i.test(`${p.application} ${p.machinery} ${p.name}`) }
];

export function getApplication(slug: string) {
  return applicationLandings.find(item => item.slug === slug);
}

export function getApplicationProducts(slug: string) {
  const app = getApplication(slug);
  return app ? bktProducts.filter(app.match) : [];
}
