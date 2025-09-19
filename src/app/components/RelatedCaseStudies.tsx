import Link from "next/link";
import Grid from "./Grid";
import { caseStudyList } from "@/app/utils/caseStudyData";

interface RelatedCaseStudiesProps {
  currentCaseStudyId: number;
}

export default function RelatedCaseStudies({
  currentCaseStudyId,
}: RelatedCaseStudiesProps) {
  // Filter out the current case study
  const relatedStudies = caseStudyList.filter(
    (study) => study.id !== currentCaseStudyId
  );

  const caseStudyCard = (study: any) => {
    return (
      <Link href={study.link} key={study.id} className="case-study-card">
        <div className="image-block">
          <img
            src={study.image}
            alt={study.title}
            // className="case-study-image"
          />
        </div>
        <div className="case-study-content">
          <h3 className="text-sm mb-xs">{study.title}</h3>
          <p className="text-xs text-gray">{study.description}</p>
        </div>
      </Link>
    );
  };

  return (
    <section className="section">
      <div className="container">
        <div className="separator mt-3xl mb-xl"></div>
        <h2 className="text-xl mb-sm text-white">Up Next</h2>
        <p className="text-sm text-gray mb-lg">
          Explore other projects and design challenges I've worked on.
        </p>
        <Grid templateColumns="repeat(3, 1fr)" gap="lg">
          {relatedStudies.map((study) => caseStudyCard(study))}
        </Grid>
      </div>
    </section>
  );
}
