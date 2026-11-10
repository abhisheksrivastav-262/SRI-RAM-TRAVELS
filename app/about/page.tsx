import Link from "next/link";

export const metadata = {
  title: "About Us | Sri Ram Travels",
  description: "Sri Ram Travels is based in Dehradun, Uttarakhand. Call or WhatsApp +91 63990 12525 for sightseeing and outstation travel.",
};

export default function About() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[380px] flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/innova.jpg" alt="About Sri Ram Travels" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="inline-flex bg-[#F5B800] text-black text-xs font-extrabold tracking-[0.15em] px-3.5 py-1 rounded-full mb-3 uppercase">
            ABOUT SRI RAM TRAVELS
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            SRI RAM TRAVELS.<br />
            <span className="text-[#F5B800]">BASED IN DEHRADUN.</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            Your Dehradun based travel partner for sightseeing and outstation journeys across Uttarakhand.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">Who We Are</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm">
              <strong>Sri Ram Travels</strong> is based in Dehradun, Uttarakhand. We offer local cabs, sightseeing and outstation journeys to popular places including Mussoorie, Rishikesh, Haridwar, Nainital, Jim Corbett and Auli.
            </p>
            <p className="mt-3 text-zinc-600 leading-relaxed text-sm">
              Whether you are planning a sunrise journey to Robber’s Cave and Sahastradhara in Dehradun, hill views in Mussoorie, riverfronts in Rishikesh and nature trips to Jim Corbett or Rajaji National Park, or need reliable transfers from Jolly Grant Airport and Dehradun Railway Station — we ensure every leg of your trip is completely covered.
            </p>

            <h3 className="font-bold text-base mt-6 text-zinc-900">Our Core Pillars</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Travel &amp; Mountain Cabs:</strong> High-powered SUVs (Innova Crysta, Scorpio), Ertiga, and Sedans driven by hill-trained drivers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Uttarakhand Sightseeing:</strong> Local trips and outstation routes across the state.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Transparent Pricing:</strong> Clear per-km and package rates with no hidden surprise fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>24/7 Personal Assistance:</strong> Always available on phone / WhatsApp at <strong>+91 63990 12525</strong> throughout your trip.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-base text-emerald-950">Where We Serve</h3>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                We operate across all key circuits of Uttarakhand:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-emerald-900">
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🌲 Dehradun</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🏔️ Mussoorie &amp; Auli</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🌊 Rishikesh &amp; Haridwar</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🦌 Nainital &amp; Jim Corbett</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">✈️ Jolly Grant Airport (DED)</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🚆 Dehradun Railway Station</span>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-6">
              <h3 className="font-bold text-base">Safety on Mountain Roads</h3>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                Mountain driving requires patience, local route knowledge, and well-maintained vehicles with fresh brakes and tires. Our fleet is routinely inspected, and our drivers know every hairpin bend in Uttarakhand.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-zinc-400">Call our travel desk</div>
                  <div className="text-base font-bold text-[#F5B800]">+91 63990 12525</div>
                </div>
                <a href="tel:+916399012525" className="bg-[#F5B800] text-black text-xs font-bold px-4 py-2 rounded-full">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Why Sri Ram Travels with Us?</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Easy Trip Planning", "Plan your route and vehicle in one simple conversation."],
              ["Handpicked Fleet", "Innova Crysta, Scorpio, Ertiga & Dzire in top mechanical shape."],
              ["Local Uttarakhand Team", "Real local knowledge of hill passes, weather & safari permits."],
              ["Fair Transparent Rates", "Competitive rates with zero hidden surcharges."],
            ].map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-6 border border-zinc-100 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5B800] mx-auto flex items-center justify-center font-black text-sm">✦</div>
                <div className="font-bold mt-3 text-sm">{t}</div>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="inline-flex bg-[#F5B800] text-black px-8 py-3 rounded-full font-bold text-sm min-h-[44px] items-center justify-center">
              BOOK YOUR UTTARAKHAND TOUR →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
