import Link from "next/link";
import DestinationGallery from "../components/DestinationGallery";
import { featuredDestinations } from "../data/destinations";

export const metadata = {
  title: "Uttarakhand Outstation & Tour Cabs | Sri Ram Travels",
  description: "Outstation cabs and holiday tour packages across Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital, Jim Corbett, Tehri Lake and Auli. Call +91 63990 12525.",
};

export default function Outstation() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[400px] flex items-center bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/innova.jpg" alt="Uttarakhand Outstation" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">OUTSTATION &amp; SIGHTSEEING CABS</div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            EXPLORE THE WONDERS OF <br /><span className="text-[#F5B800]">UTTARAKHAND &amp; HILLS</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            Sri Ram Travels offers reliable outstation journeys across Dehradun, Mussoorie, Uttarakhand, and beyond — one-way drops, multi-day circuits, and round trips.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["One-Way Hill Drops", "Direct pickups from Jolly Grant Airport or Dehradun Railway Station, with drop-offs to destinations across Uttarakhand."],
              ["Multi-Day Round Trips", "Car and dedicated mountain driver at your disposal for your complete vacation itinerary."],
              ["Nature & Wildlife Trips", "Visit nature destinations around Rajaji National Park, Jim Corbett, Rishikesh and Haridwar."],
              ["Uttarakhand Sightseeing", "Plan day trips to Dehradun, Mussoorie, Rishikesh, Haridwar and nearby attractions."],
              ["Group Excursions", "Innova Crysta, Ertiga and Tempo Traveller options for groups and extra luggage."],
              ["Uttarakhand Hill Tours", "Comfortable journeys to Nainital, Jim Corbett, Tehri Lake, Chopta and Auli."],
            ].map(([t, d]) => (
              <div key={t} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                <h3 className="font-bold text-sm text-zinc-900">{t}</h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mt-12 text-zinc-900">Popular Holiday Destinations</h2>
          <p className="text-xs text-zinc-400 mt-1">Book a cab for local sightseeing or an outstation tour. Call +91 63990 12525.</p>

          <div className="mt-6">
            <DestinationGallery places={featuredDestinations} compact />
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-flex min-h-[44px] items-center rounded-full bg-black px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800">VIEW ALL DESTINATION PHOTOS →</Link>
          </div>

          <div className="mt-10 bg-black rounded-[24px] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-display text-2xl font-bold">Ready to travel in Uttarakhand?</h3>
              <p className="text-white/70 text-sm mt-1">Get an instant quote for your custom itinerary via Call or WhatsApp.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/book" className="bg-[#F5B800] text-black px-6 py-3.5 rounded-full font-bold text-sm text-center">
                Book Outstation Tour
              </Link>
              <a href="tel:+916399012525" className="border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-sm text-center hover:bg-white hover:text-black transition">
                Call +91 63990 12525
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
