"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("home.testimonials")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            {t("home.testimonialsDesc")}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card-hover relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 md:p-8 border border-purple-100/50 shadow-sm"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-purple-200 mb-4" />

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-gold-600">{item.role}</div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-3xl rounded-tr-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
