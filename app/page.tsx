import HeroSlideshow from "./components/HeroSlideshow";
import PricingSection from "./components/PricingSection";
import Link from "next/link";
import DestinationGallery from "./components/DestinationGallery";
import { destinations } from "./data/destinations";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlideshow />

      {/* Trust Bar */}
      <section className="bg-[#F5B800] py-4 sm:py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-black">
          {[
            ["Cab & Tour Booking", "One-stop trip planning"],
            ["Mountain & Safari Cabs", "Innova, Tempo Traveller, Ertiga & Dzire"],
            ["Uttarakhand Sightseeing", "Dehradun, Mussoorie, Rishikesh & more"],
            ["Call or WhatsApp", "+91 63990 12525"],
          ].map(([t, d]) => (
            <div key={t} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-[#F5B800] flex items-center justify-center text-sm font-bold shrink-0">
                ✓
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm leading-tight">{t}</div>
                <div className="text-[11px] opacity-80 mt-0.5">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Siyaram Travels */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cars/traveller.jpg"
              alt="Siyaram Travels Tour"
              className="rounded-[20px] sm:rounded-[24px] object-cover w-full h-[320px] sm:h-[430px] shadow-premium"
            />
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-black text-white rounded-2xl p-5 sm:p-6 shadow-premium max-w-[270px] border border-zinc-800">
              <div className="text-[#F5B800] font-black text-2xl sm:text-3xl">24/7 HELPDESK</div>
              <div className="text-xs sm:text-sm font-semibold mt-0.5">Cab &amp; Tour Support</div>
              <div className="text-[11px] text-white/70 mt-1">Dehradun, Uttarakhand</div>
              <a
                href="tel:+916399012525"
                className="mt-3 inline-flex bg-[#F5B800] text-black text-xs font-extrabold px-4 py-2.5 rounded-full shadow hover:bg-[#e0a800] transition min-h-[38px] items-center"
              >
                Call +91 63990 12525
              </a>
            </div>
          </div>
          <div>
            <div className="text-emerald-700 font-bold tracking-[0.18em] text-xs mb-2 uppercase">
              ABOUT SIYARAM TRAVELS
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight text-zinc-900">
              See More of <br />
              <span className="text-[#D4A000]">Uttarakhand with Local Travel</span>
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
              Welcome to <strong>Siyaram Travels</strong>, based in <strong>Dehradun, Uttarakhand</strong>. We help visitors discover the state’s mountain scenery, riverside towns, temples, forests and hill stations with convenient local and outstation travel.
            </p>
            <p className="mt-3 text-zinc-600 leading-relaxed text-sm">
              Plan a trip to Mussoorie, Rishikesh, Haridwar, Nainital, Jim Corbett or Auli. Choose from the same vehicle fleet shown below and contact us to arrange your route.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-emerald-50/70 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                <div className="w-9 h-9 rounded-xl bg-black text-[#F5B800] flex items-center justify-center text-sm mb-2.5">
                  ◈
                </div>
                <div className="font-bold text-sm text-zinc-900">Travel &amp; Cabs</div>
                <div className="text-xs text-zinc-500 mt-1">Hill rides, jungle safaris, airport/Dehradun Railway Station pickup</div>
              </div>
              <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-100">
                <div className="w-9 h-9 rounded-xl bg-[#F5B800] text-black flex items-center justify-center text-sm mb-2.5">
                  ✦
                </div>
                <div className="font-bold text-sm text-zinc-900">Uttarakhand Tours</div>
                <div className="text-xs text-zinc-500 mt-1">Sightseeing, airport transfers &amp; outstation trips</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-800 transition min-h-[44px] items-center"
              >
                Book a Trip →
              </Link>
              <a
                href="tel:+916399012525"
                className="inline-flex border border-zinc-300 text-zinc-800 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-50 transition min-h-[44px] items-center"
              >
                Call +91 63990 12525
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cab, Sightseeing and Tour Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-emerald-700 font-bold tracking-[0.18em] text-xs mb-2">
                WHAT WE OFFER
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900">
                Cab &amp; Uttarakhand Tour Services
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Explore Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital, Jim Corbett and Auli
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-zinc-900 underline decoration-2 underline-offset-4 decoration-[#F5B800]"
            >
              View all services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                t: "Dehradun Hill Tours",
                d: "Sunrise at Robber’s Cave, Sahastradhara, Tapkeshwar Temple and Lachhiwala Nature Park with mountain SUVs.",
                tag: "TRAVEL / CAB",
                img: "/cars/innova.jpg",
              },
              {
                t: "Uttarakhand Nature & Sightseeing Trips",
                d: "Enjoy nature and sightseeing trips around Rajaji National Park, Jim Corbett, Rishikesh and Haridwar.",
                tag: "WILDLIFE / SAFARI",
                img: "/cars/traveller.jpg",
              },
              {
                t: "Mussoorie Sightseeing",
                d: "Explore Gun Hill, Kempty Falls, cactus nurseries, and tranquil retreats of Chopta & Auli.",
                tag: "SIGHTSEEING",
                img: "/cars/dzire.jpg",
              },
              {
                t: "Jolly Grant Airport & Dehradun Railway Station Pickup",
                d: "Reliable pickups and drop-offs at Jolly Grant Airport and Dehradun Railway Station for journeys across Uttarakhand.",
                tag: "TRANSFERS",
                img: "/cars/dzire.jpg",
              },
              {
                t: "Custom Uttarakhand Tour Packages",
                d: "Custom cab and sightseeing itineraries for families, couples and groups.",
                tag: "CUSTOM TOURS",
                img: "/cars/ertiga.jpg",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="group bg-white rounded-[20px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.t}
                      className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur text-[#F5B800] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-bold text-zinc-900 text-lg">{s.t}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">{s.d}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Link
                    href="/book"
                    className="w-full text-center block text-xs font-bold tracking-wide bg-zinc-900 hover:bg-black text-white px-4 py-3 rounded-full transition min-h-[42px] flex items-center justify-center"
                  >
                    BOOK THIS SERVICE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-12 sm:py-16 text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5B800]">UTTARAKHAND • PICTURES &amp; VIDEO</div>
            <h2 className="font-display text-2xl font-bold sm:text-4xl">A glimpse of the hills, rivers and valleys</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              Explore Nainital, Mussoorie, Rishikesh, Haridwar, Auli, Jim Corbett and the Himalayan river valleys. See all destination photos in our gallery and watch the Uttarakhand Tourism video gallery.
            </p>
            <Link href="/gallery" className="mt-5 inline-flex rounded-full bg-[#F5B800] px-6 py-3 text-sm font-bold text-black">VIEW DESTINATION GALLERY →</Link>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-premium">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/videoseries?list=UUX7c5KGrPjG8tzna7xhro4g"
              title="Uttarakhand Tourism video gallery"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">PHOTO GALLERY • UTTARAKHAND</p>
              <h2 className="font-display text-2xl font-bold text-zinc-950 sm:text-4xl">Places you can explore with us</h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600">Nainital, Mussoorie, Char Dham, Panch Prayag and more — all photos displayed without cropping.</p>
            </div>
            <Link href="/gallery" className="inline-flex min-h-[44px] items-center font-bold text-zinc-900 underline decoration-2 underline-offset-4 decoration-[#F5B800]">Open full gallery →</Link>
          </div>
          <DestinationGallery places={destinations} />
        </div>
      </section>

      {/* Selected Vehicles - Innova, Tempo Traveller, Ertiga, Dzire (No car rates) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="text-[#D4A000] font-bold tracking-[0.18em] text-xs mb-2 uppercase">
              OUR SELECTED FLEET
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              Only the Best Vehicles for Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Comfortable, well-maintained SUVs, Tempo Travellers, MPVs &amp; Sedans driven by seasoned mountain drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                n: "Toyota Innova",
                cat: "Hill & Jungle Safari SUV",
                f: "Mountain Power • 6-7 Seater • Large Boot",
                p: "6-7",
                l: "4-5 Bags",
                status: "Available on Enquiry",
                img: "/cars/innova.jpg",
                badge: "MOST POPULAR FOR HILLS",
              },
              {
                n: "Luxury Tempo Traveller",
                cat: "Group Holiday Tourer",
                f: "Pushback Seats • Group Travel • Uttarakhand Tour",
                p: "12-16",
                l: "10+ Bags",
                status: "Available on Enquiry",
                img: "/cars/traveller.jpg",
                badge: "FOR BIG GROUPS",
              },
              {
                n: "Maruti Ertiga",
                cat: "Comfort Family MPV",
                f: "Spacious Interior • Rear AC • Family Choice",
                p: "6",
                l: "4 Bags",
                status: "Available on Enquiry",
                img: "/cars/ertiga.jpg",
                badge: "FAMILY FAVOURITE",
              },
              {
                n: "Swift Dzire",
                cat: "Executive AC Sedan",
                f: "Airport Transfers • Smooth Ride • Economical",
                p: "4",
                l: "2 Bags",
                status: "Available on Enquiry",
                img: "/cars/dzire.jpg",
                badge: "AIRPORT & CITY",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="bg-white rounded-[20px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.n} className="h-44 sm:h-48 w-full object-cover" />
                    <span className="absolute top-2.5 right-2.5 bg-black/85 text-[#F5B800] text-[9.5px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                      {c.badge}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900">{c.n}</h3>
                        <p className="text-xs text-emerald-700 font-semibold mt-0.5">{c.cat}</p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border border-emerald-100">
                        {c.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-2">{c.f}</p>
                    <div className="mt-3 flex gap-1.5 text-[11px] flex-wrap">
                      <span className="bg-zinc-900 text-white px-2.5 py-1 rounded-full font-semibold">
                        {c.p} Pax
                      </span>
                      <span className="bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full font-semibold">
                        {c.l}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                  <Link
                    href={`/book?vehicle=${c.n}`}
                    className="block text-center bg-black hover:bg-zinc-800 text-white py-3 rounded-full font-bold text-xs sm:text-sm min-h-[42px] flex items-center justify-center transition"
                  >
                    Enquire / Book {c.n}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/fleet"
              className="inline-flex justify-center border border-zinc-200 bg-white px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-50 transition shadow-sm"
            >
              View Full Fleet Details →
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET SPECIFICATION SECTION */}
      <PricingSection />

      {/* Popular Routes in Mussoorie, Rishikesh & Haridwar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[#F5B800] font-bold tracking-[0.18em] text-xs mb-2">
                TOP TRAVEL CIRCUITS
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold">Popular Routes &amp; Tours</h2>
              <p className="text-white/70 text-xs sm:text-sm mt-1">
                Servicing Dehradun • Mussoorie • Rishikesh • Haridwar • Nainital • Dehradun • Jolly Grant • Dehradun Railway Station
              </p>
            </div>
            <Link
              href="/book"
              className="bg-[#F5B800] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e0a800] transition self-start lg:self-auto min-h-[44px] flex items-center"
            >
              Custom Route Enquiry →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { r: "Jolly Grant Airport → Dehradun", d: "Convenient pickup and drop in Dehradun" },
              { r: "Dehradun Railway Station → Dehradun", d: "Smooth hill climb with verified mountain drivers" },
              { r: "Dehradun / Dehradun Railway Station → Mussoorie", d: "Scenic drive up to Mussoorie" },
              { r: "Dehradun → Rishikesh & Haridwar", d: "Easy onward travel to two riverside destinations" },
              { r: "Dehradun → Mussoorie Sightseeing", d: "Full day hill station connector with stopovers" },
              { r: "Jim Corbett & Rajaji National Parks", d: "Explore Uttarakhand’s wildlife and forest landscapes" },
            ].map((item) => (
              <div
                key={item.r}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:border-[#F5B800] transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm sm:text-base text-white">{item.r}</div>
                    <div className="text-xs text-white/60 mt-1">{item.d}</div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#F5B800] text-black flex items-center justify-center font-bold text-sm shrink-0 ml-2 group-hover:scale-110 transition">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uttarakhand Destinations */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex bg-[#F5B800] text-black font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
                EXPLORE UTTARAKHAND
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black leading-tight">
                Plan a trip across the hills, rivers and valleys
              </h2>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                From Dehradun and Mussoorie to Rishikesh, Haridwar, Nainital, Jim Corbett and Auli, tell us where you want to go and we’ll help plan the journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="bg-white/15 px-3 py-1.5 rounded-full">Dehradun</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">Mussoorie</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">Rishikesh &amp; Haridwar</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">Nainital • Jim Corbett • Auli</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-[#F5B800] text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#e0a800] transition text-center min-h-[44px] flex items-center justify-center"
                >
                  Plan Your Trip →
                </Link>
                <a
                  href="https://wa.me/916399012525?text=Namaste%20Siyaram%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Uttarakhand%20trip"
                  target="_blank"
                  className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition text-center min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <span>✆</span> WhatsApp Siyaram Travels
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5B800] pb-[96px] sm:pb-16 text-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold tracking-[0.2em] mb-2 uppercase">SIYARAM TRAVELS</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
            PLAN YOUR UTTARAKHAND TRAVELS TODAY
          </h2>
          <p className="mt-3 text-black/80 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Contact us by call or WhatsApp to plan travel across Uttarakhand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm min-h-[48px] flex items-center justify-center hover:bg-zinc-800 transition"
            >
              BOOK YOUR TRIP →
            </Link>
            <a
              href="tel:+916399012525"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm min-h-[48px] flex items-center justify-center hover:bg-zinc-100 transition shadow"
            >
              CALL +91 63990 12525
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
