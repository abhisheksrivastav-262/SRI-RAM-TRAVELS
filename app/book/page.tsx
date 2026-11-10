import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Book a Cab or Tour | Sri Ram Travels",
  description: "Book cabs and sightseeing tours in Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital and across Uttarakhand. Call +91 63990 12525.",
};

export default function BookPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <section className="bg-black text-white py-14 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            SRI RAM TRAVELS (SRI RAM TRAVELS)
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black leading-tight">
            BOOK A CAB OR TOUR <br />
            <span className="text-[#F5B800]">UTTARAKHAND • DEHRADUN • UTTARAKHAND</span>
          </h1>
          <p className="text-white/70 mt-3 text-xs sm:text-sm max-w-2xl mx-auto">
            Fill the form below or contact us directly on call / WhatsApp for instant confirmation. 24/7 travel desk: <a href="tel:+916399012525" className="text-[#F5B800] font-bold underline">+91 63990 12525</a>.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-[740px] mx-auto px-4 sm:px-6">
          <BookingForm variant="full" title="Cab & Sightseeing Enquiry" />

          <div className="mt-6 bg-white rounded-2xl p-6 border border-zinc-100 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Need immediate booking assistance?</p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+916399012525"
                className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center"
              >
                CALL +91 63990 12525
              </a>
              <a
                href="https://wa.me/916399012525?text=Namaste%20Sri%20Ram%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Uttarakhand%20trip"
                target="_blank"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center gap-1.5"
              >
                <span>✆</span> WhatsApp Now
              </a>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-zinc-400">
            <p>Fast confirmation • No hidden fees • Experienced mountain drivers and comfortable vehicles</p>
          </div>
        </div>
      </section>
    </div>
  );
}
