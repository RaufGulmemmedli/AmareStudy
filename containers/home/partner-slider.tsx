"use client";

import { partnerRow1, partnerRow2 } from "@/data/partners";

export function PartnerSlider() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-gold-600 mb-3">
            Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Təhsil İmkanları
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Biz şagirdləri bu və digər nüfuzlu xarici universitetlərə qəbul üçün mərhələli şəkildə hazırlayır, sənəd qəbulu və seçim prosesində tam dəstək göstəririk.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-gold-500 mx-auto rounded-full mt-6" />
        </div>
      </div>

      {/* Marquee Row 1 - scrolls left */}
      <div className="relative mb-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left gap-8 md:gap-12 items-center">
          {[...partnerRow1, ...partnerRow1].map((src, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md hover:border-purple-200 transition-all duration-300"
            >
              <img
                src={src}
                alt="Partner university"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - scrolls right */}
      <div className="relative mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-right gap-8 md:gap-12 items-center">
          {[...partnerRow2, ...partnerRow2].map((src, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md hover:border-purple-200 transition-all duration-300"
            >
              <img
                src={src}
                alt="Partner university"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
