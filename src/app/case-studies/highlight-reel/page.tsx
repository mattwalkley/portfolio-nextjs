import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/Grid";
import CaseStudiesWrapper from "@/app/components/CaseStudiesWrapper";
import RelatedCaseStudies from "@/app/components/RelatedCaseStudies";
import { getCaseStudyData } from "@/app/utils/caseStudyData";

export default function DrawManagement() {
  const caseStudyData = getCaseStudyData(4);

  return (
    <CaseStudiesWrapper>
      <div className="page">
        <Navigation />

        {/* Hero Section */}
        <section className="hero my-lg">
          <div className="container mt-xl">
            <h1 className="text-5xl mb-sm">{caseStudyData.title}</h1>
            <p className="text-xl text-gray-300">{caseStudyData.description}</p>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="md">
              <div>
                <h3 className="text-base mb-xs">CQ Roll Call: Engage</h3>
                <p className="text-sm text-gray my-sm">
                  CQ Roll Call Engage is a grassroots advocacy and outreach
                  platform that helps organizations connect their members with
                  policymakers. In 2011, I led the UX design for the platform,
                  collaborating closely with product and engineering teams to
                  define the user experience for creating and managing
                  campaigns.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Established the entire design system for the platform.
                  </li>
                  <li>
                    Implemented a drag and drop site builder for creating
                    responsive advocacy campaign experiences&mdash;which was a
                    new industry standard at the time.
                  </li>

                  <li>
                    Was one of my first deep dives into true product design,
                    working in agile teams and collaborating closely with
                    product and engineering teams to define the user experience
                    for creating and managing campaigns.
                  </li>
                </ul>
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
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="md">
              <div>
                <h3 className="text-base mb-xs">Room Status Display</h3>
                <p className="text-sm text-gray my-sm">
                  In 2015 things were different. Zoom wasn't a thing yet. We all
                  worked in the same office, and that office got crowded (and a
                  little crazy). During my tenure at redpepper there was a
                  culture of tinkering. One of my favorite tinkers was a room
                  status display: we mounted tablets outside each conference
                  room and I hacked (pre-vibe coding) a room status display.
                </p>
                <ul className="list-bullets text-sm text-gray">
                  <li>
                    Used Google Calendar APIs to get the status of the room.
                  </li>
                  <li>
                    Had dynamic color coding to indicate the status of the room.
                  </li>
                  <li>
                    Was a fun experiment and conversation starter with visiting
                    clients.
                  </li>
                </ul>
              </div>
              <div className="case-study-image-block">
                <Grid templateColumns="1fr " gap="md">
                  <img
                    src="/img-room-status-2.png"
                    alt="Room Status Display"
                    className="case-study-image"
                  />
                  <img
                    src="/img-room-status.png"
                    alt="Room Status Display"
                    className="case-study-image"
                  />
                </Grid>
              </div>
            </Grid>
          </div>

          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="md">
              <div>
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
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="md">
              <div>
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
          <div className="container container--wide container--highlight my-xl">
            <Grid templateColumns="300px 1fr" gap="md">
              <div>
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

        <RelatedCaseStudies currentCaseStudyId={4} />

        <Footer />
      </div>
    </CaseStudiesWrapper>
  );
}
