import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <div className="page">
      <Navigation />
      <Hero />
      <WhatIDo />
      <CaseStudies />
      <Footer />
    </div>
  );
}
