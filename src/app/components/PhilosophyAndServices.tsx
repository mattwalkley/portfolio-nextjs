const skills = [
  {
    id: 1,
    title: "Product Design",
    description: "End-to-end UX, from concept to reality",
  },
  {
    id: 2,
    title: "Design Systems",
    description: "Scalable components and UI foundations",
  },
  {
    id: 3,
    title: "Team Mentorship",
    description: "Support for growth, craft, and confidence",
  },
  {
    id: 4,
    title: "0→1 Initiatives",
    description: "Structure and momentum in ambiguous spaces",
  },
  {
    id: 5,
    title: "Coded Prototypes",
    description: "Functional, React-based prototypes that work",
  },
  {
    id: 6,
    title: "Systems Thinking",
    description: "Clarity across complex products and platforms",
  },
  {
    id: 7,
    title: "Product & Design Advisory",
    description: "Helping teams level up UX and product maturity",
  },
  {
    id: 8,
    title: "BBQ and Pizza R&D",
    description: "Low and slow. High heat. Always handmade.",
  },
];

export default function PhilosophyAndServices() {
  return (
    <section className="section">
      <div className="container">
        <div className="philosophy-services-grid">
          <div className="philosophy-column">
            <h2 className="section-title">Philosophy</h2>
            <p className="section-text">
              I care deeply about craft, but I also care that things work. I
              prototype in code, collaborate closely with engineers, and think
              in systems built to last. Whether working on zero-to-one products,
              design systems, or platform workflows, I aim to build with care,
              earn trust, and move the work forward.
            </p>
          </div>
          <div className="services-column">
            <h2 className="section-title">What I can help with</h2>
            <div className="services-list">
              {skills.map((skill) => (
                <div key={skill.id} className="service-item">
                  <h3 className="service-title">{skill.title}</h3>
                  <p className="service-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
