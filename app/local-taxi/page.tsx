import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Local Sightseeing & Taxi | Siyaram Travels",
  description: "Local taxi, sightseeing and hourly cab rentals in Dehradun, Mussoorie, Uttarakhand and Dehradun. Call +91 63990 12525.",
};

export default function LocalTaxi() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[400px] flex items-center bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/innova.jpg" alt="Local Taxi Dehradun" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] text-xs font-extrabold uppercase tracking-widest mb-2">
            LOCAL TOURS &amp; POINT-TO-POINT RIDES
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            EXPLORE DEHRADUN, MUSSOORIE <br /><span className="text-[#F5B800]">&amp; UTTARAKHAND WITH EASE</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            Local taxi and hourly rental service for city travel, marketplace hopping, attraction transfers, local attractions and point-to-point sightseeing. Call +91 63990 12525.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Dehradun 7-Point Sightseeing",
                "Dehradun Local Sightseeing",
                "Mussoorie Mussoorie & Monastery Tour",
                "Uttarakhand Safari Watchtower Transfers",
                "Dehradun City & Mall Transfers",
                "Airport & Railway Station Transfers",
                "Tea Garden Photography Trips",
                "Full Day Cab at Disposal",
              ].map((t) => (
                <div key={t} className="bg-zinc-50 rounded-2xl p-4 sm:p-5 border border-zinc-100 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#F5B800] text-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span className="font-semibold text-xs sm:text-sm text-zinc-900">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-zinc-900 text-white rounded-2xl p-6">
              <h3 className="font-bold text-base text-[#F5B800]">Why riders choose Siyaram Travels</h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/80">
                <li>• Experienced mountain drivers who know every local viewpoint and shortcut</li>
                <li>• Transparent fixed and per-km pricing with no hidden bargaining</li>
                <li>• Clean, sanitized vehicles with fresh air &amp; mountain-ready brakes</li>
                <li>• Direct assistance via phone / WhatsApp at +91 63990 12525</li>
              </ul>
            </div>
          </div>
          <div>
            <BookingForm variant="card" title="Book Local Ride / Sightseeing" />
          </div>
        </div>
      </section>
    </div>
  );
}
