"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Clock,
  Award,
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const courses = [
  {
    id: 1,
    title: "Web Development",
    titleAz: "Veb İnkişaf",
    titleRu: "Веб-разработка",
    category: "IT",
    price: 299,
    rating: 4.8,
    students: 450,
    image: "/placeholder.svg",
    duration: "12 həftə",
  },
  {
    id: 2,
    title: "UI/UX Design",
    titleAz: "UI/UX Dizayn",
    titleRu: "UI/UX Дизайн",
    category: "Design",
    price: 249,
    rating: 4.9,
    students: 380,
    image: "/placeholder.svg",
    duration: "10 həftə",
  },
  {
    id: 3,
    title: "Digital Marketing",
    titleAz: "Rəqəmsal Marketinq",
    titleRu: "Цифровой маркетинг",
    category: "Business",
    price: 199,
    rating: 4.7,
    students: 520,
    image: "/placeholder.svg",
    duration: "8 həftə",
  },
  {
    id: 4,
    title: "Data Science",
    titleAz: "Data Elmi",
    titleRu: "Наука о данных",
    category: "IT",
    price: 349,
    rating: 4.8,
    students: 310,
    image: "/placeholder.svg",
    duration: "16 həftə",
  },
  {
    id: 5,
    title: "English Language",
    titleAz: "İngilis Dili",
    titleRu: "Английский язык",
    category: "Language",
    price: 149,
    rating: 4.6,
    students: 680,
    image: "/placeholder.svg",
    duration: "24 həftə",
  },
  {
    id: 6,
    title: "Project Management",
    titleAz: "Layihə İdarəetməsi",
    titleRu: "Управление проектами",
    category: "Business",
    price: 279,
    rating: 4.7,
    students: 290,
    image: "/placeholder.svg",
    duration: "10 həftə",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aysel Məmmədova",
    role: "Web Developer",
    quote:
      "AmareStudy sayəsində karyeramı tamamilə dəyişdirdim. Kurslar çox keyfiyyətli və müəllimlər çox peşəkardır.",
  },
  {
    id: 2,
    name: "Orxan Həsənov",
    role: "UI/UX Designer",
    quote:
      "Burada öyrəndiklərim həyatımda böyük dəyişiklik yaratdı. Hər kəsə tövsiyə edirəm!",
  },
  {
    id: 3,
    name: "Leyla Əliyeva",
    role: "Data Analyst",
    quote:
      "Çox rahat öyrənmə mühiti və dəstəkləyici komanda. Sertifikatım karyeramda böyük rol oynadı.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getCourseTitle(
  course: (typeof courses)[number],
  locale: string
): string {
  if (locale === "az") return course.titleAz;
  if (locale === "ru") return course.titleRu;
  return course.title;
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating)
              ? "fill-gold-500 text-gold-500"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="ml-1.5 text-sm font-medium text-gray-600">
        {rating}
      </span>
    </div>
  );
}

/* ================================================================== */
/*  HOME PAGE                                                          */
/* ================================================================== */

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

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

  /* ---- Stats data ---- */
  const stats = [
    {
      icon: GraduationCap,
      count: t("stats.studentsCount"),
      label: t("stats.students"),
    },
    { icon: BookOpen, count: t("stats.coursesCount"), label: t("stats.courses") },
    { icon: Users, count: t("stats.teachersCount"), label: t("stats.teachers") },
    { icon: Trophy, count: t("stats.awardsCount"), label: t("stats.awards") },
  ];

  /* ---- Why-choose-us data ---- */
  const reasons = [
    {
      icon: GraduationCap,
      title: t("home.reason1Title"),
      desc: t("home.reason1Desc"),
    },
    {
      icon: Clock,
      title: t("home.reason2Title"),
      desc: t("home.reason2Desc"),
    },
    {
      icon: Award,
      title: t("home.reason3Title"),
      desc: t("home.reason3Desc"),
    },
    {
      icon: Headphones,
      title: t("home.reason4Title"),
      desc: t("home.reason4Desc"),
    },
  ];

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */
  return (
    <div>
      {/* ============================================================ */}
      {/*  1. HERO CAROUSEL                                            */}
      {/* ============================================================ */}
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

      {/* ============================================================ */}
      {/*  2. STATISTICS SECTION                                       */}
      {/* ============================================================ */}
      <section className="relative py-16 md:py-20 bg-white">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-6 md:p-8 rounded-2xl bg-purple-50/60 hover:bg-purple-50 border border-purple-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/50"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-purple-700 mb-1 font-display">
                    {stat.count}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. FEATURED COURSES SECTION                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("home.featuredCourses")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              {t("home.featuredCoursesDesc")}
            </p>
          </div>

          {/* Course cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="card-hover group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-purple-100 flex items-center justify-center overflow-hidden">
                  <BookOpen className="h-16 w-16 text-purple-300 group-hover:scale-110 transition-transform duration-500" />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white shadow-sm">
                    {course.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-1">
                    {getCourseTitle(course, locale)}
                  </h3>

                  <RatingStars rating={course.rating} />

                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-purple-700">
                      ${course.price}
                    </span>
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      {t("courses.details")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t("home.viewAllCourses")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. ABOUT PREVIEW SECTION                                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-gold-600 mb-3">
                AmareStudy
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("home.aboutPreviewTitle")}
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                {t("home.aboutPreviewDesc")}
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-100/50">
                  <div className="text-2xl font-bold text-purple-700 font-display">
                    {t("stats.studentsCount")}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {t("stats.students")}
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gold-50 border border-gold-200/50">
                  <div className="text-2xl font-bold text-gold-600 font-display">
                    {t("stats.coursesCount")}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {t("stats.courses")}
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-100/50">
                  <div className="text-2xl font-bold text-purple-700 font-display">
                    {t("stats.teachersCount")}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {t("stats.teachers")}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t("home.aboutPreviewCta")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right - Decorative element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main gradient box */}
                <div className="w-full h-[420px] rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 shadow-2xl overflow-hidden">
                  {/* Inner decorative elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-32 h-32 rounded-2xl bg-gold-500/20 backdrop-blur-sm border border-gold-400/20" />
                    <div className="absolute bottom-12 left-8 w-40 h-40 rounded-full bg-purple-400/20 backdrop-blur-sm" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <GraduationCap className="h-32 w-32 text-white/10" />
                    </div>
                  </div>

                  {/* Floating cards */}
                  <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          {t("stats.coursesCount")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t("stats.courses")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-gold-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          {t("stats.awardsCount")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t("stats.awards")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shadow accent behind */}
                <div className="absolute -z-10 top-6 left-6 right--2 bottom--2 rounded-3xl bg-gold-500/20 blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. WHY CHOOSE US SECTION                                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-purple-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("home.whyChooseUs")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-gold-500 mx-auto rounded-full" />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="card-hover group text-center bg-white rounded-2xl p-6 md:p-8 border border-purple-100/50 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-white mb-5 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. TESTIMONIALS SECTION                                     */}
      {/* ============================================================ */}
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
    </div>
  );
}
