import type { Metadata } from "next";
import { Playfair_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Ram Travels | Uttarakhand Tours & Taxi Service from Dehradun",
    template: "%s | Sri Ram Travels",
  },
  description:
    "Sri Ram Travels offers cab service, sightseeing tours and travel across Uttarakhand from Dehradun. Call or WhatsApp +91 63990 12525.",
  keywords: [
    "Sri Ram Travels",
    "Dehradun Taxi Service",
    "Mussoorie Taxi Booking",
    "Rishikesh Taxi Service",
    "Haridwar Taxi Service",
    "Nainital Tour Cab",
    "Auli Uttarakhand Tour",
    "Uttarakhand Jungle Safari Car",
    "Uttarakhand Tour and Travels",
    "Jolly Grant Airport Taxi",
    "Dehradun Railway Station to Dehradun Taxi",
    "Dehradun Car Rental",
  ],
  openGraph: {
    title: "Sri Ram Travels - Uttarakhand Tours & Taxi",
    description: "Explore Uttarakhand with Sri Ram Travels. Dehradun based cab service, sightseeing tours and easy booking by call or WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Sri Ram Travels",
              telephone: "+916399012525",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
              areaServed: ["Dehradun", "Mussoorie", "Rishikesh", "Haridwar", "Nainital", "Jim Corbett", "Auli", "Uttarakhand"],
              serviceType: ["Taxi and Cab Booking", "Sightseeing Tours", "Uttarakhand Tour Packages", "Airport Transfers"],
            }),
          }}
        />
      </body>
    </html>
  );
}
