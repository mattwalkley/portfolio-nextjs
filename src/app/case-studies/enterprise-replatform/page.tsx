import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/Grid";
import GridBlock from "@/app/components/GridBlock";
import CaseStudiesWrapper from "@/app/components/CaseStudiesWrapper";

export default function DrawManagement() {
  return (
    <CaseStudiesWrapper>
      <div className="page">
        <Navigation />

        {/* Hero Section */}
        <section className="hero my-lg">
          <div className="container mt-xl">
            <h1 className="text-5xl mb-sm">Enterprise Re-Platform</h1>
            <p className="text-xl text-gray-300">
              How I led the design of Built's flagship CRE lending product
              re-platform, transforming a legacy system into a modern, scalable
              platform
            </p>
            <div className="separator my-lg"></div>
            <Grid templateColumns="1fr 1fr" gap="md" className="mt-lg mb-xl">
              <div className="detail-row">
                <dt className="text-xs text-gray text-uppercase">Company</dt>
                <dd>Built Technologies</dd>
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
                <dd>2024-Present</dd>
              </div>
            </Grid>
          </div>
          <div className="container container--wide my-xl">
            <img
              src="/img-draw-desk-detail-panel.png"
              alt="Draw Desk Interface"
              className="case-study-image"
            />
          </div>
        </section>

        {/* Background */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl">The challenge</h2>
            <p className="text-gray my-md">
              In 2021, I led discovery sessions with lenders to dig into one of
              the most critical pain points in our platform: draw
              management&mdash;the process of disbursing funds from a loan. This
              was the heartbeat of our product and the clearest way customers
              measured ROI.
            </p>
            <p className="text-gray my-md">
              The conversations surfaced clear themes, which defined the
              challenges we set out to solve.
            </p>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Too many experiences"
                description="There were simply too many manifestations of draw management within the product. This spawned from the fact that we were supporting multiple lines of business with different workflows and requirements."
              />
              <GridBlock
                title="Inefficient queues"
                description="Lenders were frustrated with the inefficient queues they were forced to navigate. They wanted to be able to process stale draws first or see those missing external vendor documents."
              />
              <GridBlock
                title="Transparency gaps"
                description="Lenders needed to quickly confirm where funds were going and see inspection context without drilling into every loan"
              />
              <GridBlock
                title="Customization needs"
                description="Many emphasized their 'secret sauce' processes and wanted flexibility to filter, sort, and see their data in a way that made sense for them."
              />
            </Grid>
          </div>
          <div className="container container--wide">
            <div className="case-study-image-block my-xl">
              <img
                src="/img-draw-experiences.png"
                className="case-study-image"
                alt="Legacy draw experiences in the construction loan administration product"
              />
              <div className="container">
                <p className="text-caption text-gray">
                  Assorted screenshots of the multiple draw experiences for
                  different lines of business, each with their own set of
                  features and workflows. This was a major pain point for
                  lenders as they had to navigate between multiple experiences
                  to get the information they needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="section">
          <div className="container">
            <div className="separator my-xl"></div>
            <h2 className="text-3xl mb-sm">Identifying the problem</h2>
            <p className="text-gray mb-md">
              The patterns made the pain impossible to ignore. Lenders weren't
              simply inconvenienced—they were blocked from doing their core job
              efficiently. We captured these frustrations in a problem statement
              to align the team and chart a path forward.
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
            <h2 className="text-xl mt-xl my-md">Additional goals</h2>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Reduce information architecture complexity"
                description="Collapse multiple legacy pages (segmented by draw status) into a single centralized hub with status filters, reducing context-switching and surfacing the full picture."
              />
              <GridBlock
                title="Simplify onboarding &amp; training"
                description="Provide one consistent interface across loan products, reducing ramp-up time for new users."
              />
              <GridBlock
                title="Address diverse lender needs at scale"
                description="Lenders rely on unique “secret sauce” processes, which previously forced bespoke feature requests. The goal was to introduce customization tools that let them solve their own problems."
              />
              <GridBlock
                title="Increase developer velocity, efficiency, and delight"
                description="Deliver Built's first React frontend, modernizing the stack and deprecating redundant pages, which lowered bug risk and freed up engineering time."
              />
            </Grid>
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
              <div>
                <div className="case-study-image-block mb-lg">
                  <img
                    src="/img-draw-desk.png"
                    alt="Draw Desk Interface"
                    className="case-study-image"
                  />
                </div>
                <Grid templateColumns="1fr 1fr" gap="lg">
                  <div className="case-study-image-block">
                    <img
                      src="/img-draw-desk-detail-panel.png"
                      alt="Details panel"
                      className="case-study-image"
                    />
                    <p className="text-caption text-gray">
                      The draw card detail panel appears when a draw is
                      selected. It contains the draw's details, actions, and
                      context.
                    </p>
                  </div>
                  <div className="case-study-image-block">
                    <img
                      src="/img-draw-desk-columns.png"
                      alt="Columns panel"
                      className="case-study-image"
                    />
                    <p className="text-caption text-gray">
                      The columns menu allows lenders to customize the columns
                      that are displayed in the Draw Desk.
                    </p>
                  </div>
                  <div className="case-study-image-block">
                    <img
                      src="/img-draw-desk-filters.png"
                      alt="Filters panel"
                      className="case-study-image"
                    />
                    <p className="text-caption text-gray">
                      The filters panel allows lenders to filter draws on any
                      column.
                    </p>
                  </div>
                  <div className="case-study-image-block">
                    <img
                      src="/img-draw-desk-bulk-actions.png"
                      alt="Bulk actions panel"
                      className="case-study-image"
                    />
                    <p className="text-caption text-gray">
                      The bulk actions panel allows lenders to perform bulk
                      actions on the current selection of draws.
                    </p>
                  </div>
                </Grid>
              </div>
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

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
