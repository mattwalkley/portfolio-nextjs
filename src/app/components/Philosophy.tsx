import Grid from "./Grid";

export default function Philosophy() {
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

  return (
    <section className="section my-2xl">
      <div className="container">
        <Grid templateColumns="1fr" gap="md">
          <div>
            <h2 className="text-xl mb-sm text-white">Philosophy</h2>
            <p className="text-lg text-gray">
              I care deeply about craft, but I also care that things work. I
              prototype in code, collaborate closely with engineers, and think
              in systems built to last. Whether working on zero-to-one products,
              design systems, or platform workflows, I aim to build with care,
              earn trust, and move the work forward.
            </p>
          </div>
          <h2 className="text-xl text-white">What I can help with</h2>
          <Grid templateColumns="1fr 1fr" gap="md">
            {skills.map((skill) => (
              <div className="service-item" key={skill.id}>
                <h3 className="text-sm text-white">{skill.title}</h3>
                <p className="text-sm text-gray">{skill.description}</p>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
