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
              src="/img-deal-overview.png"
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
              By 2020, Built had proven product–market fit in consumer and
              homebuilder lending. Those products worked well for smaller loans
              and simpler workflows, but the company's growth ambitions were
              moving upmarket into commercial real estate. That's where the
              cracks started to show.
            </p>

            <p className="text-gray my-md">
              What worked for consumer and homebuilder loans wasn't going to cut
              it for enterprise CRE. The size of the deals, the number of
              records being managed, and the complexity of workflows were far
              beyond what the existing platform could handle.
            </p>

            <p className="text-gray my-md">
              The technology itself was outdated, and each attempt to extend it
              only introduced more fragility. Just as important, the
              fundamentals enterprise clients expected—robust roles and
              permissions, configurable workflows, and compliance-ready
              controls—were missing.
            </p>

            <p className="text-gray my-md">
              To compete in CRE and serve larger, more sophisticated lenders,
              Built needed more than incremental fixes. The challenge was clear:
              replatform the flagship product to handle enterprise scale.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="section">
          <div className="container">
            <div className="separator my-xl"></div>
            <h2 className="text-3xl mb-sm">Identifying the problem</h2>
            <p className="text-gray mb-md">
              Over the years, we'd accumulated a deep inventory of “voice of the
              customer” feedback, recurring pain points, and long-standing
              technical needs. With the opportunity to replatform, we stepped
              back to first principles—reviewing everything we'd heard and
              experienced, and distilling it into a set of core problems to
              solve at the foundation of the product.
            </p>
          </div>
          <div className="container container--highlight my-lg">
            <Grid templateColumns="240px 1fr" gap="md">
              <div>
                <h3 className="text-base mb-xs">
                  Sorting through voice of the customer
                </h3>
                <p className="text-sm text-gray my-sm">
                  We conducted an affinity mapping exercise to group similar
                  feedback into themes and identify the most pressing problems.
                  This exercise helped us prioritize the most critical issues
                  and set the foundation for the replatforming effort.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-voc-affinity-mapping.png"
                  alt="Affinity mapping exercise from historical voice of the customer feedback"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container">
            <p className="text-base text-gray mb-md">
              Through our research and analysis, we identified a set of core
              problems that consistently surfaced across customer feedback,
              technical reviews, and user interviews. Addressing these issues
              was essential to building a platform that could truly meet the
              needs of enterprise lenders and support future growth. Here are
              the core problems we uncovered:
            </p>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Insufficient permissioning"
                description="The legacy model supported only basic roles and could not scale to the complex hierarchies enterprise lenders required."
              />
              <GridBlock
                title="Security gaps"
                description="Authentication and password management lacked enterprise options like two-factor, SSO, and streamlined reset flows."
              />
              <GridBlock
                title="Rigid workflows"
                description="Status names, processes, and rules were hardcoded, forcing lenders into inflexible workflows that didn’t reflect their business."
              />
              <GridBlock
                title="Inconsistent naming"
                description="Field labels and naming conventions couldn’t be customized to match institutional standards, creating confusion across products."
              />
              <GridBlock
                title="Limits at scale"
                description="The system struggled with complex CRE deals, capping the number of stakeholders or financed properties that could be managed."
              />
              <GridBlock
                title="Constrained scope"
                description="The platform focused narrowly on construction lending, leaving no way to extend into permanent asset management."
              />
              <GridBlock
                title="Collaboration friction"
                description="Teams lacked tools to coordinate effectively within the platform or to collaborate externally with borrowers and vendors."
              />
              <GridBlock
                title="Limited notifications"
                description="The system offered too few notifications for the events lenders cared about, and provided no way to control who received them."
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
              After much debate, we decided to replatform the flagship product.
              Replatforming gave us the opportunity to tackle these foundational
              gaps directly. Instead of layering on more patches, we rebuilt the
              product from the ground up, designing enterprise-grade
              capabilities, flexible workflows, and extensible architecture into
              its core.
            </p>
            <p className="text-base text-gray my-md">
              Each of the problems we identified became a focal point for the
              solution. We defined clear requirements, partnered closely with
              engineering to shape the technical model, and validated with
              lenders to ensure the features met enterprise expectations without
              sacrificing usability.
            </p>
          </div>
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">
                  Enterprise-grade roles &amp; permissions
                </h3>
                <p className="text-sm text-gray my-sm">
                  We introduced a new enterprise-grade RBAC model.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Roles are fully configurable with unlimited permission sets.
                  </li>
                  <li>
                    Fine-grained controls allow institutions to mirror their
                    organizational hierarchies and approval chains.
                  </li>
                  <li>
                    Designed for scale so complex enterprises could finally
                    administer access without workarounds.
                  </li>
                </ul>
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
