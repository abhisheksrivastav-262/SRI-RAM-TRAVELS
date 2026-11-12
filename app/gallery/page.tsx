import type { Metadata } from "next";
import DestinationGallery from "../components/DestinationGallery";
import { destinations } from "../data/destinations";

export const metadata: Metadata = {
  title: "Uttarakhand Destination Gallery | Siyaram Travels",
  description: "View destination photos from Nainital, Mussoorie, Rishikesh, Haridwar, Auli, Jim Corbett and Uttarakhand’s Himalayan valleys and river confluences.",
};

export default function GalleryPage() {
  return (
    <div className="bg-zinc-50 pb-16 pt-28 sm:pt-32">
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Siyaram Travels • Uttarakhand</p>
          <h1 className="mt-2 font-display text-3xl font-black text-zinc-950 sm:text-5xl">Destination Gallery</h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Nainital se Devprayag tak — Uttarakhand ke destinations ki photos dekhein. Har photo poori dikhai jaati hai, mobile par bhi crop nahi hoti.
          </p>
        </div>
        <DestinationGallery places={destinations} />
      </section>
    </div>
  );
}
