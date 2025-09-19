import Grid from "./Grid";

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Re-Platform",
    description:
      "How I led the design of Built's flagship CRE lending product re-platform, transforming a legacy system into a modern, scalable platform",
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
      "How I led the creation of a design system—hiring the team, driving buy-in, and contributing from implementation to adoption",
    image: "/img-timber-cover.png",
    link: "/case-studies/design-system",
    password: "portfolio2024",
  },
  {
    id: 4,
    title: "Miscellaneous",
    description:
      "Selected highlights from a range of client projects—showcasing unique challenges, creative problem-solving, and impact across different industries.",
    image: "/img-timber-cover.png",
    link: "/case-studies/miscellaneous",
    password: "portfolio2024",
  },
];

export default function CaseStudies() {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "var(--spacing-md)",
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
  };

  const caseStudyCover = (study: any) => {
    return (
      <a href={study.link} key={study.id} className="case-study-cover">
        <div className="image-block">
          <img src={study.image} alt={study.title} style={imageStyles} />
        </div>
        <div className="case-study-content">
          <h3 className="text-base">{study.title}</h3>
          <p className="text-sm text-gray my-xs">{study.description}</p>
        </div>
      </a>
    );
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl mb-sm text-white">Case Studies</h2>
        <p className="text-lg text-gray mb-xl">
          These case studies show how I've tackled tough problems, partnered
          across teams, and shaped solutions that moved both the business and
          the product forward.
        </p>
      </div>
      <div className="container container--wide">
        <Grid templateColumns="1fr 1fr" gap="lg">
          {caseStudies.map((study) => caseStudyCover(study))}
        </Grid>
      </div>
    </section>
  );
}
