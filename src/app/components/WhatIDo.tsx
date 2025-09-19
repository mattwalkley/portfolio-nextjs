import Grid from "./Grid";
import GridBlock from "./GridBlock";

const skills = [
  {
    id: 1,
    title: "Product Design",
    description: "End-to-end user experience design, from concept to reality",
  },
  {
    id: 2,
    title: "Design Systems",
    description: "Scalable components and UI foundations",
  },
  // {
  //   id: 3,
  //   title: "Team Mentorship",
  //   description: "Support for growth, craft, and confidence",
  // },
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
  // {
  //   id: 8,
  //   title: "BBQ and Pizza R&D",
  //   description: "Low and slow. High heat. Always handmade.",
  // },
];

export default function WhatIDo() {
  return (
    <section className="section">
      <div className="container">
        {/* <div className="separator my-lg"></div> */}
        <p className="text-lg text-gray mb-md">
          On any given day you can find me working on:
        </p>
        <Grid templateColumns="repeat(3, 1fr)" gap="md">
          {skills.map((skill) => (
            <GridBlock
              key={skill.id}
              title={skill.title}
              description={skill.description}
              size="sm"
            />
          ))}
        </Grid>
        <div className="separator my-2xl"></div>
      </div>
    </section>
  );
}
