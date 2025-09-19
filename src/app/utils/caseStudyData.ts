export const caseStudyList = [
  {
    id: 1,
    title: "Enterprise Platform Redesign",
    description:
      "Transforming Built's flagship CRE lending product—redesigning and replatforming a legacy system into a modern, scalable solution.",
    image: "/img-replatform-cover.png",
    link: "/case-studies/enterprise-replatform",
  },
  {
    id: 2,
    title: "Centralizing Draw Management",
    description:
      "How I redesigned a construction finance product's fragmented draw workflows into a unified, scalable system that improved efficiency across all loan types",
    image: "/img-draw-desk-cover.png",
    link: "/case-studies/draw-management",
  },
  {
    id: 3,
    title: "Timber Design System",
    description:
      "Creating a design system from the ground up—driving buy-in, building the team, and guiding implementation through adoption.",
    image: "/img-timber-cover.png",
    link: "/case-studies/design-system",
  },
  {
    id: 4,
    title: "Highlight Reel",
    description:
      "Selected highlights from a range of client projects—showcasing unique challenges, creative problem-solving, and impact across different industries.",
    image: "/img-highlight-reel-cover.png",
    link: "/case-studies/highlight-reel",
  },
];

export function getCaseStudyById(id: number) {
  return caseStudyList.find((study) => study.id === id);
}

export function getCaseStudyData(id: number) {
  const caseStudy = getCaseStudyById(id);
  if (!caseStudy) {
    throw new Error(`Case study with ID ${id} not found`);
  }
  return caseStudy;
}
