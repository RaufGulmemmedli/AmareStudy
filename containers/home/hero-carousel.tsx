"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function HeroCarousel() {
  const t = useTranslations();

  /* ---- Hero carousel state ---- */
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % totalSlides),
    []
  );
  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides),
    []
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* ---- Slide data ---- */
  const slides = [
    {
      title: t("hero.slide1Title"),
      subtitle: t("hero.slide1Subtitle"),
      desc: t("hero.slide1Desc"),
    },
    {
      title: t("hero.slide2Title"),
      subtitle: t("hero.slide2Subtitle"),
      desc: t("hero.slide2Desc"),
    },
    {
      title: t("hero.slide3Title"),
      subtitle: t("hero.slide3Subtitle"),
      desc: t("hero.slide3Desc"),
    },
  ];

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700" />
          <div className="absolute inset-0 hero-overlay" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight animate-fade-in"
                key={`title-${currentSlide}`}
              >
                {slide.title}
              </h1>
              <p
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gold-400 mb-4 animate-fade-in"
                style={{ animationDelay: "0.15s" }}
                key={`subtitle-${currentSlide}`}
              >
                {slide.subtitle}
              </p>
              <p
                className="text-base sm:text-lg md:text-xl text-purple-100/90 mb-10 max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.3s" }}
                key={`desc-${currentSlide}`}
              >
                {slide.desc}
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg animate-fade-in"
                style={{ animationDelay: "0.45s" }}
              >
                {t("hero.cta")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white transition-all duration-200 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white transition-all duration-200 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-gold-500"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
