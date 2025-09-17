import Grid from "./Grid";

const caseStudies = [
  {
    id: 2,
    title: "Centralizing Draw Management",
    description:
      "How I redesigned a construction finance product's fragmented draw workflows into a unified, scalable system that improved efficiency across all loan types",
    image: "/img-draw-desk-cover.png",
    figmaLink: "/case-studies/draw-management",
    password: "portfolio2024",
  },
  {
    id: 1,
    title: "Budget Management Interface",
    description:
      "Designed an intuitive budget tracking system for portfolio management, featuring hierarchical cost categorization and real-time financial insights",
    image: "/img-draw-desk-cover.png",
    figmaLink: "https://figma.com/file/budget-interface",
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
      <a href={study.figmaLink} key={study.id} className="case-study-cover">
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
      <div className="container wide">
        <Grid templateColumns="1fr 1fr" gap="lg">
          {caseStudies.map((study) => caseStudyCover(study))}
        </Grid>
      </div>
    </section>
  );
}
