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
            <h1 className="text-5xl mb-sm">Miscellaneous</h1>
            <p className="text-xl text-gray-300">
              Selected highlights from a range of client projects—showcasing
              unique challenges, creative problem-solving, and impact across
              different industries.
            </p>
            <div className="separator my-lg"></div>
            <Grid
              templateColumns="50% 1fr 1fr"
              gap="md"
              className="mt-lg mb-xl"
            >
              <div className="detail-row">
                <dt className="text-xs text-gray text-uppercase">Company</dt>
                <dd>Various</dd>
              </div>
              <div className="detail-row">
                <dt className="text-xs text-gray text-uppercase">Role</dt>
                <dd>Design Lead</dd>
              </div>
              <div className="detail-row">
                <dt className="text-xs text-gray text-uppercase">Dates</dt>
                <dd>2013-2025</dd>
              </div>
            </Grid>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container container--wide container--highlight">
            <Grid templateColumns="300px 1fr" gap="md" className="my-2xl">
              <div className="text-content">
                <h3 className="text-base mb-xs">CQ Roll Call: Engage</h3>
                <p className="text-sm text-gray my-sm">
                  CQ Roll Call Engage is a grassroots advocacy and outreach
                  platform that helps organizations connect their members with
                  policymakers. It combines membership data with CQ's
                  legislative intelligence to power targeted action alerts,
                  campaigns, and communications, making it easier to mobilize
                  supporters and influence policy outcomes.
                </p>
                <p className="text-sm text-gray my-sm">
                  I led the UX design for the platform in 2012, working closely
                  with the product and engineering teams to define the user
                  experience for creating and managing different advocacy
                  campaigns.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-cqrollcall-engage.png"
                  alt="CQ Roll Call: Engage"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container container--wide container--highlight">
            <Grid templateColumns="300px 1fr" gap="md" className="my-2xl">
              <div className="text-content">
                <h3 className="text-base mb-xs">Built Inspect</h3>

                <p className="text-sm text-gray my-sm">
                  In 2015 I spearheaded the design of Built Technologies'
                  inspector mobile app, which enabled construction lenders to
                  facilitate progress inspections. While the app has since been
                  rewritten for native iOS and Android and visually updated to
                  align with Built's brand, the foundational UX and core
                  workflow I designed remain largely unchanged and continue to
                  be used today.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-ima-screens.png"
                  alt="Built Inspect screenshots"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container container--wide container--highlight">
            <Grid templateColumns="300px 1fr" gap="md" className="my-2xl">
              <div className="text-content">
                <h3 className="text-base mb-xs">Healthier Tennessee</h3>
                <p className="text-sm text-gray my-sm">
                  In 2014 I led the UX design for a new mobile app for Healthier
                  Tennessee, a public health initiative in Tennessee. The app
                  was called <strong>"Streaks"</strong> and focused on helping
                  users achieve their health goals by tracking healthy habits
                  over time.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-streaks-app-ui.png"
                  alt="Streaks app screens"
                  className="case-study-image"
                />
                <img
                  src="/img-streaks-user-flow.png"
                  alt="Streaks user flow"
                  className="case-study-image"
                />
                <img
                  src="/img-streaks-challenges.png"
                  alt="Streaks challenges"
                  className="case-study-image"
                />
                <img
                  src="/img-streaks-activity.png"
                  alt="Streaks activity"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
          <div className="container container--wide container--highlight">
            <Grid templateColumns="300px 1fr" gap="md" className="my-2xl">
              <div className="text-content">
                <h3 className="text-base mb-xs">Beatlynk</h3>
                <p className="text-sm text-gray my-sm">
                  In 2014, I worked on a fun project for a startup aiming to let
                  users follow curated playlists from their favorite celebrity
                  icons. The platform allowed users to discover celebrities and
                  subscribe to their exclusive playlists.
                </p>
                <p className="text-sm text-gray my-sm">
                  I especially enjoyed this project because it gave me the
                  chance to work on a B2C product and design a music player
                  experience.
                </p>
              </div>
              <div className="case-study-image-block">
                <img
                  src="/img-beatlynk.png"
                  alt="Streaks app screens"
                  className="case-study-image"
                />
              </div>
            </Grid>
          </div>
        </section>

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
