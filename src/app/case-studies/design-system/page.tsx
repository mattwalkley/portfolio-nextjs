import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/Grid";
import GridBlock from "@/app/components/GridBlock";
import CaseStudiesWrapper from "@/app/components/CaseStudiesWrapper";
import RelatedCaseStudies from "@/app/components/RelatedCaseStudies";
import { getCaseStudyData } from "@/app/utils/caseStudyData";

export default function DrawManagement() {
  const caseStudyData = getCaseStudyData(3);

  return (
    <CaseStudiesWrapper>
      <div className="page">
        <Navigation />

        {/* Hero Section */}
        <section className="hero my-lg">
          <div className="container mt-xl">
            <h1 className="text-5xl mb-sm">{caseStudyData.title}</h1>
            <p className="text-xl text-gray-300">{caseStudyData.description}</p>
            <div className="container container--highlight my-md">
              <Grid templateColumns="1fr 1fr" gap="md">
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Company</dt>
                  <dd>
                    <a
                      href="https://getbuilt.com"
                      target="_blank"
                      className="text-link"
                    >
                      Built Technologies
                    </a>
                  </dd>
                </div>
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Role</dt>
                  <dd>Director, Product Design</dd>
                </div>
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Product</dt>
                  <dd>All Built products on the React stack</dd>
                </div>
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Dates</dt>
                  <dd>2023-2024</dd>
                </div>
              </Grid>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl">The challenge</h2>
            <p className="text-gray my-md">
              As Built rapidly expanded its React product suite, we faced a
              growing disconnect between our polished Figma designs and their
              real-world implementation. Without a dedicated design system team,
              our component library was a patchwork of internal and external
              tools—community-driven, lacking standards, and functioning more as
              an engineering utility than a purposeful, scalable system. For
              many engineers, React was still new, and best practices were
              inconsistently applied.
            </p>
            <p className="text-gray my-md">
              This led to tangible product issues: accessibility gaps,
              inconsistent UI patterns, style conflicts, and no standard for
              common interactions like modals or popovers. Even fundamental
              elements like grids were built as isolated one-offs, resulting in
              varied user experiences and increased engineering overhead as
              teams maintained multiple custom versions.
            </p>
            <div className="separator my-2xl"></div>
            <h2 className="text-3xl mb-sm">Identifying the problem</h2>
            <p className="text-gray mb-md">
              The inconsistencies and gaps in our component implementations were
              more than just annoyances—they directly impacted our ability to
              deliver accessible, cohesive experiences and slowed down
              development. We distilled these challenges into a clear problem
              statement to focus the team and guide our next steps.
            </p>
            <Grid templateColumns="1fr" gap="md">
              <GridBlock
                size="lg"
                title="The problem statement"
                description="Inconsistent component implementation across Built’s products creates accessibility gaps, style conflicts, and interaction variance. Core elements like grids are re-implemented as one-offs, increasing engineering effort, slowing developer velocity, and raising the cost of maintaining and extending the platform."
              />
              <GridBlock
                size="lg"
                title="The hypothesis"
                description="If we establish a scalable design system—originated by the product design team and supported by a dedicated front-end engineering team—we can eliminate these inconsistencies, improve accessibility, and reduce engineering overhead while delivering more cohesive, high-quality experiences."
              />
            </Grid>
            <div className="separator my-2xl"></div>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl mb-sm">The solution</h2>
            <p className="text-base text-gray my-md">
              With a strong hypothesis, I set out to secure organizational
              buy-in, hire the right talent, and establish the Platform UX team
              to deliver Built's first unified design system within 12 months.
            </p>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Organizational buy-in"
                description="Secured organizational buy-in that investing in a design system was critical to our product's long-term success."
              />
              <GridBlock
                title="Hiring the right talent"
                description="Identified and hired the right talent—engineers with deep front-end expertise, React mastery, and a passion for design details and composability. We also brought on a dedicated product designer with prior design system experience."
              />
              <GridBlock
                title="Establishing the Platform UX team"
                description="Established the Platform UX team and set a clear mission: to build and ship Built's first design system into production."
              />
              <GridBlock
                title="Timber Design System"
                description="Over the course of the next 12 months, the Platform UX team delivered the Timber design system."
              />
            </Grid>
          </div>
          <div className="container container--wide">
            <div className="case-study-image-block my-xl">
              <img
                src="/img-timber-assortment.png"
                alt="Assortment of components from the Timber design system"
                className="case-study-image"
              />
              <p className="text-caption text-gray">
                Various components from the Timber design system.
              </p>
            </div>
          </div>
          <div className="container container--wide">
            <Grid templateColumns="1fr 1fr" gap="md">
              <div className="case-study-image-block">
                <img
                  src="/img-portfolio.png"
                  alt="Storybook instance for the Timber design system"
                  className="case-study-image"
                />
                <p className="text-caption text-gray">
                  Our primary page structure implements the global navigation,
                  page header, and the standard grid layout with toolbar.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-deal-overview.png"
                  alt="Storybook instance for the Timber design system"
                  className="case-study-image"
                />
                <p className="text-caption text-gray">
                  Secondary page structure demonstrates the secondary navigation
                  patterns, card-based widgets layouts, and implements several
                  other patterns.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-draw-schedule.png"
                  alt="Storybook instance for the Timber design system"
                  className="case-study-image"
                />
                <p className="text-caption text-gray">
                  Tertiary pages leveraged breadcrumbs in the page header and
                  employed similar layout patterns to secondary pages.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-workflow-builder.png"
                  alt="Storybook instance for the Timber design system"
                  className="case-study-image"
                />
                <p className="text-caption text-gray">
                  This example of our workflow builder shows how modal dialogs
                  can employ cards, forms, and other components to create a
                  simple yet powerful experience.
                </p>
              </div>
            </Grid>
          </div>
          <div className="container">
            <div className="separator my-2xl"></div>
          </div>
        </section>

        {/* Impact */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl mb-sm">Impact</h2>
            <Grid templateColumns="1fr 1fr" gap="lg" className="impact-grid">
              <GridBlock
                title="Product Adoption"
                description={
                  <>
                    Timber was adopted by all of Built's products on the React
                    stack which encompassed all but one of our flagship
                    products.
                  </>
                }
              />
              <GridBlock
                title="90% Coverage"
                description={
                  <>
                    Timber components in Figma were 90% covered by React
                    components. This allowed us to reduce the amount of time
                    spent on design/development handoffs.
                  </>
                }
              />
              <GridBlock
                title="Cost Savings"
                description={
                  <>
                    Estimated $1M+ in savings by reducing the amount of time
                    spent on development implementation over the course of an 18
                    month period.
                  </>
                }
              />
              <GridBlock
                title="Documentation"
                description={
                  <>
                    We maintained a dedicated Storybook instance for all Timber
                    components and documentation, enabling designers and
                    engineers to quickly reference usage guidelines, see live
                    examples, and ensure consistent implementation across teams.
                  </>
                }
              />
            </Grid>
          </div>
        </section>

        {/* Reflection */}
        <section className="section mt-2xl">
          <div className="container">
            <h2 className="text-3xl mb-sm">Reflection</h2>
            <p className="text-base text-gray my-md">
              Timber is one of the initiatives I'm most proud of at Built.
              Design systems are the way to{" "}
              <strong>scale design quality and velocity</strong>, and I was able
              to secure both business buy-in and a dedicated team with the right
              skills to build it out properly.
            </p>
            <p className="text-base text-gray my-md">
              I set clear requirements for new products to adopt Timber from the
              start and managed those expectations consistently. To keep the
              system evolving, I created a feedback loop for proposing changes
              and a process for implementing new features.
            </p>
            <p className="text-base text-gray my-md">
              Developer delight and adoption were high. Engineers embraced
              Timber because it made their work faster and more consistent.
              Across the organization, Timber became well understood and valued
              as a core asset that improved both the product and the way teams
              worked together.
            </p>
            <p className="text-base text-gray my-md">
              Timber also set the foundation for future products and became a
              model for how we approach systems work at scale.
            </p>
          </div>
        </section>

        <RelatedCaseStudies currentCaseStudyId={3} />

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
