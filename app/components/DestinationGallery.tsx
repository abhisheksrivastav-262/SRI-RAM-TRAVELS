import Image from "next/image";
import Link from "next/link";
import type { Destination } from "../data/destinations";

type Props = {
  places: Destination[];
  compact?: boolean;
};

export default function DestinationGallery({ places, compact = false }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ${compact ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}>
      {places.map((place) => (
        <article id={place.slug} key={place.slug} className="scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium">
          <Link href={`/gallery#${place.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            <div className="flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-2 sm:h-64 sm:p-3">
              <Image
                src={place.image}
                alt={`${place.name} — ${place.hindi}`}
                width={place.width}
                height={place.height}
                sizes={compact ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                <h3 className="font-display text-lg font-bold text-zinc-900">{place.name}</h3>
                <span lang="hi" className="text-sm font-semibold text-emerald-800">{place.hindi}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{place.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
