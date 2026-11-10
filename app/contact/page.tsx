"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-black text-white py-14 sm:py-16 text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            SRI RAM TRAVELS • DEHRADUN, UTTARAKHAND
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black">
            EXPLORE UTTARAKHAND <br />
            <span className="text-[#F5B800]">WITH SRI RAM TRAVELS</span>
          </h1>
          <p className="text-white/70 mt-3 text-xs sm:text-sm max-w-xl mx-auto">
            Based in Dehradun, Uttarakhand. Call or WhatsApp us to plan your trip: +91 63990 12525.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <div className="text-xs font-bold tracking-wide text-zinc-400 uppercase">Call or WhatsApp Us</div>
              <a href="tel:+916399012525" className="text-2xl sm:text-3xl font-black mt-1 block text-zinc-900 hover:text-[#F5B800] transition">
                +91 63990 12525
              </a>
              <p className="text-xs text-zinc-500 mt-1">Tap to call for instant cab booking, sightseeing and tour details</p>
              <div className="mt-4 flex gap-2">
                <a href="tel:+916399012525" className="flex-1 bg-black text-white text-center py-3 rounded-full font-bold text-xs sm:text-sm min-h-[44px] flex items-center justify-center">
                  Call Now
                </a>
                <a
                  href="https://wa.me/916399012525?text=Namaste%20Sri%20Ram%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Uttarakhand%20trip."
                  target="_blank"
                  className="flex-1 bg-[#25D366] text-white text-center py-3 rounded-full font-bold text-xs sm:text-sm min-h-[44px] flex items-center justify-center gap-1"
                >
                  <span>✆</span> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <div className="text-xs font-bold tracking-wide text-zinc-400 uppercase">Service Hubs</div>
              <p className="font-bold text-zinc-900 mt-1">Sri Ram Travels</p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-1">
                Address: Dehradun, Uttarakhand<br />
                Sightseeing areas: Dehradun • Mussoorie • Rishikesh • Haridwar • Nainital • Jim Corbett • Auli<br />
                Uttarakhand, India
              </p>
            </div>

            <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-base text-[#F5B800]">Need a cab for your Uttarakhand trip?</h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Ask us about local sightseeing, airport pickups, outstation trips and vehicle availability across Uttarakhand.
              </p>
              <a href="tel:+916399012525" className="mt-4 inline-flex bg-[#F5B800] text-black px-6 py-2.5 rounded-full font-bold text-xs min-h-[38px] items-center">
                Call +91 63990 12525 →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[24px] p-6 sm:p-8 border border-zinc-100 shadow-sm">
            {!sent ? (
              <>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900">Send an Enquiry</h3>
                <p className="text-xs text-zinc-500 mt-1">Sri Ram Travels team will contact you with custom quote.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const details = Array.from(formData.entries())
                      .map(([label, value]) => `${label}: ${String(value).trim() || "Not provided"}`)
                      .join("\n");
                    const message = `Namaste Sri Ram Travels!\nNew cab and Uttarakhand tour enquiry:\n${details}`;
                    window.location.assign(`https://wa.me/916399012525?text=${encodeURIComponent(message)}`);
                    setSent(true);
                  }}
                  className="mt-6 grid gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">YOUR NAME</label>
                      <input name="Name" required placeholder="Full Name" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] min-h-[46px]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">PHONE NUMBER</label>
                      <input name="Phone" type="tel" required placeholder="Your 10-digit phone number" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] min-h-[46px]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">SERVICE REQUIRED</label>
                      <select name="Service required" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]">
                        <option>Travel &amp; Cab Rental</option>
                        
                        <option>Uttarakhand Sightseeing Tour</option>
                        <option>Airport / Railway Station Transfer</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">START LOCATION</label>
                      <input name="Pickup location" placeholder="e.g. Dehradun" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">DESTINATION</label>
                      <input name="Destination" placeholder="e.g. Mussoorie, Rishikesh, Nainital" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-500 block mb-1">TRIP DETAILS</label>
                    <textarea name="Trip details" placeholder="Tell us your dates, group size, destinations and vehicle requirements..." rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800]" />
                  </div>
                  <button type="submit" className="w-full bg-black hover:bg-zinc-800 text-white py-4 rounded-full font-bold text-sm min-h-[48px]">
                    SUBMIT ENQUIRY →
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">✓</div>
                <h3 className="font-bold text-xl mt-4">Thank you!</h3>
                <p className="text-sm text-zinc-500 mt-2">Your enquiry has been received. Our team will contact you promptly.</p>
                <p className="text-sm mt-3">Urgent? Call our desk directly at <a href="tel:+916399012525" className="font-bold underline text-black">+91 63990 12525</a></p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm p-4 sm:p-6">
            <h3 className="font-bold text-lg text-zinc-900">Service Coverage Map</h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Uttarakhand sightseeing and travel areas include Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital, Jim Corbett and Auli. Contact us to confirm your route.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Dehradun &amp; Mussoorie</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Rishikesh &amp; Haridwar</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Nainital &amp; Jim Corbett</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Auli &amp; Uttarakhand Hills</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
