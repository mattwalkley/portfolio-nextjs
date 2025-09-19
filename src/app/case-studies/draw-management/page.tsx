import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/Grid";
import GridBlock from "@/app/components/GridBlock";
import CaseStudiesWrapper from "@/app/components/CaseStudiesWrapper";
import RelatedCaseStudies from "@/app/components/RelatedCaseStudies";
import { getCaseStudyData } from "@/app/utils/caseStudyData";

export default function DrawManagement() {
  const caseStudyData = getCaseStudyData(2);

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
                  <dd>Product Design Lead</dd>
                </div>
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Product</dt>
                  <dd>Construction Loan Administration</dd>
                </div>
                <div className="detail-row">
                  <dt className="text-xs text-gray text-uppercase">Dates</dt>
                  <dd>2021-2022</dd>
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
              In 2021, I led discovery sessions with lenders to dig into one of
              the most critical pain points in our platform:{" "}
              <strong>draw management</strong>&mdash;the process of disbursing
              funds from a loan. This was the heartbeat of our product and the
              clearest way customers measured ROI.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="section">
          <div className="container">
            <div className="separator my-xl"></div>
            <h2 className="text-3xl mb-sm">Identifying the problem</h2>
            <p className="text-gray mb-md">
              Over the course of six months, we conducted 20+ discovery calls to
              deeply understand the pain points lenders faced. These
              conversations revealed that lenders weren't just
              inconvenienced—they were often blocked from doing their core job
              efficiently.
            </p>
            <p className="text-gray my-md">
              Through this extensive discovery process, we identified recurring
              themes that defined the challenges we needed to address.
            </p>
            {/* Moved the grid block content into the bulleted list below */}
          </div>
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <p className="text-sm text-gray mb-md">
                  <strong>Too many experiences</strong>
                  <br />
                  There were simply too many manifestations of draw management
                  within the product. This spawned from the fact that we were
                  supporting multiple lines of business with different workflows
                  and requirements.
                </p>
                <p className="text-sm text-gray my-md">
                  <strong>Inefficient queues</strong>
                  <br />
                  Lenders were frustrated with the inefficient queues they were
                  forced to navigate. They wanted to be able to process stale
                  draws first or see those missing external vendor documents.
                </p>

                <p className="text-sm text-gray my-md">
                  <strong>Customization needs</strong>
                  <br />
                  Many emphasized their 'secret sauce' processes and wanted
                  flexibility to filter, sort, and see their data in a way that
                  made sense for them.
                </p>
              </div>

              <div className="case-study-image-block">
                <img
                  src="/img-draw-experiences.png"
                  className="case-study-image"
                  alt="Legacy draw experiences in the construction loan administration product"
                />
                <p className="text-caption text-gray">
                  Assorted screenshots of the multiple draw experiences for
                  different lines of business, each with their own set of
                  features and workflows. This was a major pain point for
                  lenders as they had to navigate between multiple experiences
                  to get the information they needed.
                </p>
              </div>
            </Grid>
          </div>
          <div className="container">
            <p className="text-gray my-md">
              We distilled these frustrations into a clear problem statement to
              align the team and guide our next steps.
            </p>
            <Grid templateColumns="1fr" gap="md">
              <GridBlock
                size="lg"
                title="The problem statement"
                description="Managing draws across diverse construction loan products is fragmented and inefficient. Each loan type (consumer, homebuilder, commercial) requires different documentation and review processes, forcing lenders into manual, siloed workflows. This slows down approvals, delays capital deployment, and ultimately reduces earned interest income."
              />
              <GridBlock
                size="lg"
                title="The hypothesis"
                description="If we create a centralized hub for draws, we can abstract away product-specific complexity and unify lenders into a single streamlined workflow. This will allow them to move faster through their queues, improve draw turnaround times, and accelerate capital deployment, which increases earned interest across their portfolios."
              />
            </Grid>
            <h2 className="text-lg mt-lg mb-xs">Additional goals</h2>
            <p className="text-gray">
              In addition to solving the core workflow problems, we set out to
              achieve several supporting goals to improve the experience for
              both lenders and our internal teams:
            </p>
            <ul className="list-bullets text-gray text-base my-md">
              <li>
                <strong>Reduce information architecture complexity</strong>
              </li>
              <li>
                <strong>Simplify onboarding &amp; training</strong>
              </li>
              <li>
                <strong>Address diverse lender needs at scale</strong>
              </li>
              <li>
                <strong>Increase developer velocity and efficiency</strong>
              </li>
            </ul>
            <div className="separator my-xl"></div>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl mb-sm">The solution</h2>
            <p className="text-base text-gray my-md">
              We introduced the <strong>Draw Desk</strong>, a centralized page
              that replaced multiple fragmented screens and became the single
              queue for draws across all lines of business.
            </p>
            <h3 className="text-xl mt-xl my-md">Core design principles</h3>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Unified interface"
                description="A simple grid-based layout with familiar sorting, filtering, and column controls across all loan types"
              />
              <GridBlock
                title="Lender customization"
                description={
                  <>
                    Supported lender “secret sauce” through customizable saved
                    views (e.g., order by "time in status" or "awaiting
                    inspection”)
                  </>
                }
              />
              <GridBlock
                title="Contextual actions"
                description={
                  <>
                    <strong>"Draw Cards"</strong> provided at-a-glance context
                    and surfaced actions without leaving the page
                  </>
                }
              />
              <GridBlock
                title="Loan-specific adaptations"
                description="Draw details and calls to action were dynamically rendered based on the loan type"
              />
            </Grid>
          </div>
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Interface layout</h3>
                <p className="text-sm text-gray my-sm">
                  Draws were organized into two sections within the Draw Desk:{" "}
                  <strong>Active</strong> and <strong>Historical</strong>.
                  Active draws included draws across any status that was not
                  "Transferred" or "Archived".
                </p>
              </div>
              <Grid templateColumns="1fr" gap="lg">
                <div className="case-study-image-block mb-lg">
                  <img
                    src="/img-draw-desk.png"
                    alt="Draw Desk Interface"
                    className="case-study-image"
                  />
                </div>
                <div className="case-study-image-block">
                  <img
                    src="/img-draw-desk-panel.png"
                    alt="Draw Desk panels"
                    className="case-study-image"
                  />
                  <p className="text-caption text-gray">
                    Dynamic side panels that appear when draws are selected,
                    filters are applied, or columns are sorted.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Draw card anatomy</h3>
                <p className="text-sm text-gray my-sm">
                  The draw card became the workhorse of the Draw Desk providinga
                  quick snapshot that let lenders see the essentials and take
                  action without ever leaving the page. In redesigning it, I
                  modernized the look and expanded its capabilities so it could
                  flex across use cases. What started as a single component grew
                  into a reusable pattern anytime the product needed to show a
                  draw in miniature.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-draw-card-anatomy.png"
                  alt="Draw Card Anatomy"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Saved view selector</h3>
                <p className="text-sm text-gray my-sm">
                  Saved views enable lenders to customize the filter, sort, and
                  column selection to enable their "secret sauce" workflows.
                </p>
                <p className="text-sm text-gray my-sm">
                  We shipped with several "default views" to get lenders started
                  and to support many of the known use cases.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-saved-views.png"
                  alt="Saved views selector"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Information architecture</h3>
                <p className="text-sm text-gray my-sm">
                  To satisfy the goal of reducing IA complexity, we collapsed
                  multiple legacy pages into a single centralized hub. This
                  simplified the user experience, made training and onboarding
                  easier, and reduced the amount of code needed to support the
                  different loan types and workflows.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-draw-desk-ia.png"
                  alt="Information architecture changes"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
        </section>

        {/* Impact */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl mb-sm">Impact</h2>
            <Grid
              templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
              gap="lg"
              className="impact-grid"
            >
              <GridBlock
                title="User Adoption"
                description={
                  <>
                    <strong>63% monthly usage rate</strong> - Draw Desk became
                    the top page in the application, demonstrating strong user
                    adoption and workflow integration
                  </>
                }
              />
              <GridBlock
                title="Processing Efficiency"
                description={
                  <>
                    <strong>2.75 days average</strong> draw turnaround time
                    across all loan types, with Consumer loans at 2.9 days and
                    Homebuilder loans at 1.5 days
                  </>
                }
              />
              <GridBlock
                title="Scale & Volume"
                description={
                  <>
                    <strong>40,000 draws monthly</strong> processed through the
                    unified system, handling over{" "}
                    <strong>$5B+ in monthly draw volume</strong>
                  </>
                }
              />
              <GridBlock
                title="Technical Foundation"
                description={
                  <>
                    Established React as the frontend standard, consolidated
                    multiple legacy pages, and improved developer velocity
                    across the platform
                  </>
                }
              />
            </Grid>
          </div>
        </section>

        {/* Reflection */}
        <section className="section mt-2xl">
          <div className="container">
            <div className="separator my-xl"></div>
            <h2 className="text-3xl mb-sm">Reflection</h2>
            <p className="text-base text-gray my-md">
              This initiative reinforced that solving workflow scale problems
              requires more than UI cleanup. It demanded aligning business
              incentives (interest income), user needs (faster queues,
              transparency), and technical strategy (modern stack).
            </p>
            <p className="text-base text-gray my-md">
              Introducing <strong>Saved Views</strong> was a pivotal moment—it
              set the stage for lender-driven customization, allowing them to
              tailor workflows while reducing the need for bespoke features.
              This balance of{" "}
              <strong>
                scalability, flexibility, and technical modernization
              </strong>{" "}
              positioned the product to serve lenders across all loan types more
              effectively. After the release of Draw Desk, saved views became
              the new standard for several of our grid experiences and became a
              key part of our product's design system.
            </p>
          </div>
        </section>

        <RelatedCaseStudies currentCaseStudyId={2} />

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
