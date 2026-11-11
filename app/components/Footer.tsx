import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-zinc-300">
      {/* Top CTA */}
      <div className="border-b border-zinc-800">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[#F5B800] text-xs tracking-[0.2em] font-bold mb-2">PLANNING YOUR TRIP?</div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-none">Uttarakhand Trips Made Easy<span className="text-[#F5B800]">.</span></h3>
            <p className="text-zinc-400 text-sm mt-2">Serving Dehradun • Mussoorie • Rishikesh • Haridwar • Nainital</p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <Link href="/book" className="flex-1 lg:flex-none bg-[#F5B800] text-black font-bold px-8 py-4 rounded-full text-center hover:bg-[#E6AC00] transition">Book Now</Link>
            <a href="tel:+916399012525" className="flex-1 lg:flex-none border border-white/20 text-white font-bold px-8 py-4 rounded-full text-center hover:bg-white hover:text-black transition">Call +91 63990 12525</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 pb-[88px] sm:pb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Sri Ram Travels home" className="mb-4 inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F5B800] text-lg font-black text-[#073b2a]">SR</span>
              <span className="font-display text-sm font-extrabold leading-tight tracking-wide text-white sm:text-base">
                SRI RAM <span className="text-[#B7F000]">TRAVELS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              Dehradun based travel service for sightseeing and outstation journeys across Uttarakhand.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:+916399012525" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#F5B800] hover:text-black transition text-sm">☎</a>
              <a href="https://wa.me/916399012525?text=Namaste%20Sri%20Ram%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Uttarakhand%20trip" target="_blank" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition text-sm">✆</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Service Regions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-zinc-300 font-semibold">• Dehradun &amp; Mussoorie</span></li>
              <li><span className="text-zinc-300 font-semibold">• Rishikesh &amp; Haridwar</span></li>
              <li><span className="text-zinc-300 font-semibold">• Nainital &amp; Jim Corbett</span></li>
              <li><span className="text-zinc-300 font-semibold">• Auli &amp; Uttarakhand Hills</span></li>
              <li><span className="text-zinc-300 font-semibold">• Jolly Grant Airport &amp; Dehradun Railway Station</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/book" className="hover:text-[#F5B800] transition">Travel &amp; Cab Booking</Link></li>
              <li><Link href="/book" className="hover:text-[#F5B800] transition">Sightseeing &amp; Tours</Link></li>
              <li><Link href="/services" className="hover:text-[#F5B800] transition">Dehradun Sightseeing Tours</Link></li>
              <li><Link href="/services" className="hover:text-[#F5B800] transition">Uttarakhand Jungle Safari</Link></li>
              <li><Link href="/airport-transfer" className="hover:text-[#F5B800] transition">Jolly Grant &amp; Dehradun Railway Station Transfer</Link></li>
              <li><Link href="/fleet" className="hover:text-[#F5B800] transition">Our Premium Fleet</Link></li>
              <li><Link href="/gallery" className="hover:text-[#F5B800] transition">Uttarakhand Photo Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+916399012525" className="block text-white font-bold text-xl hover:text-[#F5B800] transition">+91 63990 12525</a>
              <p className="text-zinc-400 leading-relaxed text-[13px]">
                Sri Ram Travels<br />
                Dehradun • Mussoorie • Rishikesh • Haridwar • Nainital<br />
                Uttarakhand, India
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-semibold">24/7 Booking Support Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Sri Ram Travels. All Rights Reserved. Dehradun, Uttarakhand.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
