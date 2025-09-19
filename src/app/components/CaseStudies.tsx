import Grid from "./Grid";
import { caseStudyList } from "@/app/utils/caseStudyData";

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
      <a href={study.link} key={study.id} className="case-study-card">
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
          {caseStudyList.map((study) => caseStudyCover(study))}
        </Grid>
      </div>
    </section>
  );
}
