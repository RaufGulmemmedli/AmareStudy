"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  BookOpen,
  Star,
  Users,
  Clock,
  ChevronRight,
  Search,
  BarChart,
  Award,
  Globe,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const courses = [
  { id: 1, title: "Web Development", titleAz: "Veb Inkishaf", titleRu: "\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430", category: "IT", price: 299, rating: 4.8, students: 450, duration: "12 h\u0259ft\u0259", level: "intermediate", image: "/placeholder.svg" },
  { id: 2, title: "UI/UX Design", titleAz: "UI/UX Dizayn", titleRu: "UI/UX \u0414\u0438\u0437\u0430\u0439\u043d", category: "Design", price: 249, rating: 4.9, students: 380, duration: "10 h\u0259ft\u0259", level: "beginner", image: "/placeholder.svg" },
  { id: 3, title: "Digital Marketing", titleAz: "R\u0259q\u0259msal Marketinq", titleRu: "\u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433", category: "Business", price: 199, rating: 4.7, students: 520, duration: "8 h\u0259ft\u0259", level: "beginner", image: "/placeholder.svg" },
  { id: 4, title: "Data Science", titleAz: "Data Elmi", titleRu: "\u041d\u0430\u0443\u043a\u0430 \u043e \u0434\u0430\u043d\u043d\u044b\u0445", category: "IT", price: 349, rating: 4.8, students: 310, duration: "16 h\u0259ft\u0259", level: "advanced", image: "/placeholder.svg" },
  { id: 5, title: "English Language", titleAz: "\u0130ngilis Dili", titleRu: "\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a", category: "Language", price: 149, rating: 4.6, students: 680, duration: "24 h\u0259ft\u0259", level: "beginner", image: "/placeholder.svg" },
  { id: 6, title: "Project Management", titleAz: "Layih\u0259 \u0130dar\u0259etm\u0259si", titleRu: "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438", category: "Business", price: 279, rating: 4.7, students: 290, duration: "10 h\u0259ft\u0259", level: "intermediate", image: "/placeholder.svg" },
  { id: 7, title: "Python Programming", titleAz: "Python Proqramla\u015fd\u0131rma", titleRu: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Python", category: "IT", price: 199, rating: 4.9, students: 560, duration: "14 h\u0259ft\u0259", level: "beginner", image: "/placeholder.svg" },
  { id: 8, title: "Graphic Design", titleAz: "Qrafik Dizayn", titleRu: "\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d", category: "Design", price: 229, rating: 4.5, students: 340, duration: "10 h\u0259ft\u0259", level: "intermediate", image: "/placeholder.svg" },
  { id: 9, title: "Russian Language", titleAz: "Rus Dili", titleRu: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a", category: "Language", price: 129, rating: 4.4, students: 220, duration: "20 h\u0259ft\u0259", level: "beginner", image: "/placeholder.svg" },
  { id: 10, title: "Cyber Security", titleAz: "Kiber T\u0259hl\u00fck\u0259sizlik", titleRu: "\u041a\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c", category: "IT", price: 399, rating: 4.8, students: 180, duration: "16 h\u0259ft\u0259", level: "advanced", image: "/placeholder.svg" },
  { id: 11, title: "Business Analytics", titleAz: "Biznes Analitika", titleRu: "\u0411\u0438\u0437\u043d\u0435\u0441-\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430", category: "Business", price: 259, rating: 4.6, students: 310, duration: "12 h\u0259ft\u0259", level: "intermediate", image: "/placeholder.svg" },
  { id: 12, title: "Mobile App Development", titleAz: "Mobil T\u0259tbiq \u0130nki\u015faf\u0131", titleRu: "\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430", category: "IT", price: 329, rating: 4.7, students: 290, duration: "14 h\u0259ft\u0259", level: "intermediate", image: "/placeholder.svg" },
];

const categories = [
  { key: "filterAll", value: "All" },
  { key: "filterIT", value: "IT" },
  { key: "filterDesign", value: "Design" },
  { key: "filterBusiness", value: "Business" },
  { key: "filterLanguage", value: "Language" },
  { key: "filterScience", value: "Science" },
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
  const filteredCourses = courses.filter((course) => {
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
      <section className="relative min-h-[320px] md:min-h-[380px] flex flex-col justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700" />
        <div className="absolute inset-0 bg-purple-900/60" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-purple-200/90 [&>li]:text-purple-200/90">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-white transition-colors">
                    {t("nav.home")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-purple-300/70">
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-medium">
                  {t("nav.courses")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight animate-fade-in">
            {t("courses.title")}
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {t("courses.subtitle")}
          </p>
        </div>
      </section>

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
                {categories.map((cat) => (
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
