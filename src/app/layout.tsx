import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Matt Walkley | Design Leader. Systems Thinker. Builder.",
  description:
    "Product designer portfolio showcasing case studies, thought leadership, and design expertise for startups and enterprise teams.",
  keywords: [
    "product design",
    "UX design",
    "design systems",
    "startup design",
    "fractional design lead",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BQGFEP3BM8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BQGFEP3BM8', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
