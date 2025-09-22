"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url = pathname + (window.location.search || "");

      // Track page view
      window.gtag("config", "G-BQGFEP3BM8", {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track custom events for case studies
      if (pathname.includes("/case-studies/")) {
        const caseStudyName = pathname.split("/").pop();
        window.gtag("event", "case_study_view", {
          case_study_name: caseStudyName,
          page_path: url,
        });
      }

      // Track portfolio page views
      if (pathname === "/portfolio") {
        window.gtag("event", "portfolio_view", {
          page_path: url,
        });
      }

      // Track writing page views
      if (pathname === "/writing") {
        window.gtag("event", "writing_view", {
          page_path: url,
        });
      }
    }
  }, [pathname]);

  return null;
}
