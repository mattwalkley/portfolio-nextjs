import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Built Technologies Design System",
    company: "Built Technologies",
    description:
      "Led creation of Timber, a comprehensive design system that scaled Built from 2 to 12 designers and supported their expansion to a suite of connected products.",
    category: "Design Systems",
    duration: "2+ years",
    image: "/placeholder-1.jpg",
    figmaLink: "https://figma.com/file/example1",
    password: "portfolio2024",
  },
  {
    id: 2,
    title: "Platform UX Team Launch",
    company: "Built Technologies",
    description:
      "Founded and scaled Built's first Platform UX team, establishing design operations practices including VOC, RFCs, and design critiques.",
    category: "Design Ops",
    duration: "1 year",
    image: "/placeholder-2.jpg",
    figmaLink: "https://figma.com/file/example2",
    password: "portfolio2024",
  },
  {
    id: 3,
    title: "React Component Library",
    company: "Built Technologies",
    description:
      "Built Components - our first reusable React component library that transitioned Built's frontend to React and component-driven development.",
    category: "Frontend Development",
    duration: "6 months",
    image: "/placeholder-3.jpg",
    figmaLink: "https://figma.com/file/example3",
    password: "portfolio2024",
  },
  {
    id: 4,
    title: "CRE Lending Workflows",
    company: "Built Technologies",
    description:
      "Designed advanced lending workflows for Built's flagship CRE product, tackling complex financial processes with intuitive UX.",
    category: "Product Design",
    duration: "8 months",
    image: "/placeholder-4.jpg",
    figmaLink: "https://figma.com/file/example4",
    password: "portfolio2024",
  },
  {
    id: 5,
    title: "Mobile Inspection App",
    company: "Built Technologies",
    description:
      "Redesigned mobile inspection app (iOS/Android) with budget tracking features, improving field team efficiency and data accuracy.",
    category: "Mobile Design",
    duration: "4 months",
    image: "/placeholder-5.jpg",
    figmaLink: "https://figma.com/file/example5",
    password: "portfolio2024",
  },
  {
    id: 6,
    title: "BLT CSS Framework",
    company: "Built Technologies",
    description:
      'Built "BLT," a CSS/HTML library that improved UI consistency and development speed across multiple product teams.',
    category: "Frontend Systems",
    duration: "3 months",
    image: "/placeholder-6.jpg",
    figmaLink: "https://figma.com/file/example6",
    password: "portfolio2024",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="section pt-32 pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-black mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The journey from founding designer at Built Technologies to a
              decade of building working prototypes. See how I transform design
              challenges into scalable solutions that actually ship.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Case Study Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">
                      {study.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.company}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={study.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-1 text-center"
                    >
                      View in Figma
                    </a>
                    <button className="px-4 py-2 text-sm text-gray-500 hover:text-black transition-colors">
                      Password: {study.password}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm seeking my next founding designer adventure. Ready to transform
            your vision into a product that users can't live without? Let's
            build something legendary together.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:matthew.walkley@gmail.com"
              className="btn bg-white text-black hover:bg-gray-100"
            >
              Let's Build Together
            </a>
            <Link
              href="/writing"
              className="text-white font-medium hover:underline"
            >
              Read My Thoughts →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
