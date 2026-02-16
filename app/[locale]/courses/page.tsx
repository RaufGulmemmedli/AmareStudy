"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  BookOpen,
  Users,
  Clock,
  ChevronRight,
  Search,
  BarChart,
  Award,
  Globe,
} from "lucide-react";
import { allCourses, courseCategories } from "@/data/courses";
import { getCourseTitle } from "@/lib/helpers";
import { RatingStars } from "@/components/shared/rating-stars";
import { HeroBanner } from "@/components/shared/hero-banner";

function getLevelIcon(level: string) {
  switch (level) {
    case "beginner":
      return <Globe className="h-3 w-3" />;
    case "intermediate":
      return <BarChart className="h-3 w-3" />;
    case "advanced":
      return <Award className="h-3 w-3" />;
    default:
      return <Globe className="h-3 w-3" />;
  }
}

function getLevelColor(level: string) {
  switch (level) {
    case "beginner":
      return "bg-green-100 text-green-700";
    case "intermediate":
      return "bg-gold-100 text-gold-700";
    case "advanced":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

/* ================================================================== */
/*  COURSES PAGE                                                       */
/* ================================================================== */

export default function CoursesPage() {
  const t = useTranslations();
  const locale = useLocale();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  /* ---- Filter courses ---- */
  const filteredCourses = allCourses.filter((course) => {
    const title = getCourseTitle(course, locale).toLowerCase();
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */
  return (
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. PAGE HERO BANNER                                         */}
      {/* ============================================================ */}
      <HeroBanner
        title={t("courses.title")}
        subtitle={t("courses.subtitle")}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.courses") },
        ]}
      />

      {/* ============================================================ */}
      {/*  2. SEARCH & FILTER BAR                                      */}
      {/* ============================================================ */}
      <section className="relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              {/* Search input */}
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("courses.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-200"
                />
              </div>

              {/* Category filter buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {courseCategories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat.value
                        ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                        : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    {t(`courses.${cat.key}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. COURSE GRID                                              */}
      {/* ============================================================ */}
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              {filteredCourses.length}{" "}
              {filteredCourses.length === 1 ? "course" : "courses"}
            </p>
          </div>

          {/* No results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-purple-200 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-500">
                {t("common.noResults")}
              </p>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCourses.map((course) => (
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

                  {/* Level badge */}
                  <span
                    className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${getLevelColor(
                      course.level
                    )}`}
                  >
                    {getLevelIcon(course.level)}
                    {t(`courses.${course.level}`)}
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
                      {course.price} &#8380;
                    </span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      {t("courses.details")}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
