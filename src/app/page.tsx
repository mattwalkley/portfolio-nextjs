"use client";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import CaseStudies from "./components/CaseStudies";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const password = urlParams.get("pw");
    if (password) {
      localStorage.setItem("case-studies-password", password);
    }
  }, []);
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
