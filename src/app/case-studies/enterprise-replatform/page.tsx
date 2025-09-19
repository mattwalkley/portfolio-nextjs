import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/Grid";
import GridBlock from "@/app/components/GridBlock";
import CaseStudiesWrapper from "@/app/components/CaseStudiesWrapper";
import RelatedCaseStudies from "@/app/components/RelatedCaseStudies";
import { getCaseStudyData } from "@/app/utils/caseStudyData";

export default function DrawManagement() {
  const caseStudyData = getCaseStudyData(1);

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
                  <dd>2024-Present</dd>
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
              By 2023, Built had achieved product-market fit in consumer and
              homebuilder lending, but as the company set its sights on
              commercial real estate, the limitations of the existing platform
              became clear. What worked for smaller, simpler loans couldn't keep
              up with the scale, complexity, and volume of enterprise CRE
              deals—workflows became increasingly complicated, and the system
              began to strain.
            </p>
            <p className="text-gray my-md">
              The technology was outdated and increasingly fragile, and the core
              features enterprise clients expected—robust roles and permissions,
              configurable workflows, and compliance-ready controls—were
              missing. To compete for larger, more sophisticated lenders, Built
              needed more than incremental fixes: the flagship product had to be
              replatformed to truly support enterprise scale.
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
            <div className="container container--highlight my-lg">
              <Grid templateColumns="240px 1fr" gap="md">
                <div>
                  <h3 className="text-base mb-xs">
                    Sorting through voice of the customer
                  </h3>
                  <p className="text-sm text-gray my-sm">
                    We conducted an affinity mapping exercise to group similar
                    feedback into themes and identify the most pressing
                    problems. This exercise helped us prioritize the most
                    critical issues and set the foundation for the replatforming
                    effort.
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
            <p className="text-base text-gray mb-md">
              Through our research and analysis, we identified a set of core
              problems that consistently surfaced across customer feedback,
              technical reviews, and user interviews.
            </p>
            <Grid templateColumns="1fr 1fr" gap="md">
              <GridBlock
                title="Limited control of sources and uses"
                description="Funding sources and their uses (the items being funded) lacked governance controls and didn't support the full range of CRE financing options."
              />
              <GridBlock
                title="Inefficient manual processes"
                description="Many routine tasks—like document review, data entry, and exception handling—were manual and time-consuming, limiting productivity and leaving little room for automation or AI-driven efficiency gains."
              />
              <GridBlock
                title="Rigid workflows"
                description="Status names, processes, and rules were hardcoded, forcing lenders into inflexible workflows that didn’t reflect their business."
              />
              <GridBlock
                title="Insufficient permissioning"
                description="The legacy model supported only basic roles and could not scale to the complex hierarchies enterprise lenders required."
              />
              <GridBlock
                title="Security gaps"
                description="Authentication and password management lacked enterprise options like two-factor, SSO, and streamlined reset flows."
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
            </p>{" "}
            <p className="text-base text-gray my-md">
              Each of the problems we identified became a focal point for the
              solution—we defined clear requirements, partnered closely with
              engineering to shape the technical model, and validated with
              lenders to ensure the features met enterprise expectations without
              sacrificing usability.
            </p>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Expanded sources and uses</h3>
                <p className="text-sm text-gray my-sm">
                  We expanded the sources and uses to support the full range of
                  CRE financing options and governance controls.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Sources and uses are now fully configurable with unlimited
                    types and categories.
                  </li>
                  <li>
                    Over 100 new data points are able to be collected on sources
                    to capture the full range of CRE financing options.
                  </li>
                  <li>
                    Lenders can define eligibility controls that govern which
                    sources are eligible to be used for a given source.
                  </li>
                  <li>
                    The UI display was updated to show the sources and uses more
                    intuitively while also fixing performance issues.
                  </li>
                </ul>
              </div>
              <div className="case-study-image-block">
                <Grid templateColumns="1fr" gap="lg">
                  <img
                    src="/img-sources-uses-setup.png"
                    alt="Sources and uses setup screen"
                    className="case-study-image"
                  />
                  <img
                    src="/img-expanded-source-details.png"
                    alt="Expanded source details screen"
                    className="case-study-image"
                  />
                </Grid>
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">AI-powered efficiency</h3>
                <p className="text-sm text-gray my-sm">
                  We introduced a new AI-powered data extraction and
                  classification process that simplifies data entry and improves
                  accuracy.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>No chatbots, no LLMs, just AI-powered efficiency.</li>
                  <li>
                    Uploaded documents are now automatically extracted, parsed,
                    and mapped to the appropriate fields.
                  </li>
                  <li>
                    New design patterns were introduced to provide consistent
                    indicators for information provided by the AI.
                  </li>
                </ul>
              </div>
              <div className="case-study-image-block">
                <Grid templateColumns="1fr" gap="lg">
                  <img
                    src="/img-ai-doc-review.png"
                    alt="AI-powered document review"
                    className="case-study-image"
                  />
                </Grid>
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Composable workflows</h3>
                <p className="text-sm text-gray my-sm">
                  We introduced a new composable workflow model that allows
                  lenders to create and manage their own workflows.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Workflows are fully configurable with unlimited steps and
                    conditions.
                  </li>
                  <li>
                    Lenders can define statuses, actions, and conditions for
                    their workflows.
                  </li>
                  <li>
                    Dynamic actions can be triggered when a workflow moves from
                    one status to another.
                  </li>
                </ul>
              </div>
              <div className="case-study-image-block">
                <Grid templateColumns="1fr" gap="lg">
                  <img
                    src="/img-workflow-map.png"
                    alt="Workflow map"
                    className="case-study-image"
                  />
                  <img
                    src="/img-workflow-builder.png"
                    alt="Workflow builder"
                    className="case-study-image"
                  />
                </Grid>
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">
                  Enterprise-grade roles &amp; permissions
                </h3>
                <p className="text-sm text-gray my-sm">
                  We introduced a new enterprise-grade RBAC model that allows
                  lenders (and our internal teams) to manage users and
                  permissions for a tenant.
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
                    src="/img-tenant-user-mgmt.png"
                    alt="Draw Desk Interface"
                    className="case-study-image"
                  />
                </div>
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">Enhanced account security</h3>
                <p className="text-sm text-gray my-sm">
                  Multi-factor authentication, SSO, and password reset flows
                  were improved to meet enterprise security standards.
                </p>
                <p className="text-sm text-gray my-sm">
                  Lenders can now choose to use their own password manager or
                  use Built's password manager.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-account-settings.png"
                  alt="My account showing multi-factor authentication"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="lg">
              <div>
                <h3 className="text-base mb-xs">No limits.</h3>
                <p className="text-sm text-gray my-sm">
                  The new platform is designed to support one or one-thousand
                  properties, stakeholders, or other entities. Gone are the days
                  of "this is the limit".
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Multi-property deals are now supported with no limits on the
                    number of properties.
                  </li>
                  <li>
                    Multiple borrowers, contractors, and vendors can be added
                    without limits and collaborate with ease.
                  </li>
                  <li>
                    New design patterns were introduced to support new search
                    indexing, pagination, and filtering.
                  </li>
                </ul>
              </div>
              <div className="case-study-image-block">
                <Grid templateColumns="1fr" gap="lg">
                  <img
                    src="/img-multi-property.png"
                    alt="Multiple properties supported on a deal"
                    className="case-study-image"
                  />
                </Grid>
              </div>
            </Grid>
          </div>
        </section>

        {/* Impact */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl mb-sm">Impact</h2>
            <p className="text-base text-gray my-md">
              It's still early days (GTM - Q1 2025), but the initial signs
              suggest we're on the right track. The replatform delivered the
              scale and flexibility lenders needed for complex commercial real
              estate deals, and the feedback so far has validated the hard
              choices made along the way.
            </p>
            <Grid templateColumns="1fr 1fr 1fr" gap="lg">
              <GridBlock
                title="Volume"
                description={
                  <>
                    <strong>$220+ billion</strong> in commercial real estate
                    dollars active on the platform.
                  </>
                }
              />
              <GridBlock
                title="Adoption &amp; migration"
                description="Existing customers are steadily migrating to the new platform and are loving the new capabilities."
              />
              <GridBlock
                title="New customer segment"
                description="The new platform is attracting lenders who specialize in asset management, not just construction lending."
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
              Though I've since moved on from Built, I'm excited to see how the
              new platform continues to grow, especially as it expands into
              broader asset management workflows like property oversight, lease
              data, and cash flow management.
            </p>
            <p className="text-base text-gray my-md">
              Looking ahead, the biggest challenge will be balance. If all loan
              types (consumer, homebuilder, and commercial) eventually move onto
              this new platform, the risk is overwhelming simpler users with
              tools designed for the most complex scenarios. The opportunity
              will be to keep the enterprise-grade power while meeting lenders
              at their level of sophistication, ensuring that the platform
              scales both up and down gracefully.
            </p>
          </div>
        </section>

        <RelatedCaseStudies currentCaseStudyId={1} />

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
