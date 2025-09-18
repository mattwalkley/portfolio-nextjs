import Grid from "./Grid";

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

export default function WhatIDo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-xl text-white my-lg">
          Areas of focus and expertise
        </h2>
        <Grid templateColumns="1fr 1fr" gap="md">
          {skills.map((skill) => (
            <div className="grid-block" key={skill.id}>
              <h3 className="text-sm text-white">{skill.title}</h3>
              <p className="text-sm text-gray">{skill.description}</p>
            </div>
          ))}
        </Grid>
        <div className="separator my-2xl"></div>
      </div>
    </section>
  );
}
