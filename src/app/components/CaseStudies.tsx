import Grid from "./Grid";

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Platform Redesign",
    description:
      "How I led the transformation of Built's flagship CRE lending product—redesigning and replatforming a legacy system into a modern, scalable solution.",
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
        <div className="case-study-content text-left">
          <h3 className="text-lg">{study.title}</h3>
          <p className="text-base text-gray my-xs">{study.description}</p>
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
