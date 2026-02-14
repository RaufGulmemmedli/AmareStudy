"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Calendar,
  Eye,
  MessageCircle,
  ChevronRight,
  Search,
  Tag,
  User,
  Newspaper,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const blogPosts = [
  { id: 1, title: "Proqramlaşdırmanı Öyrənmək Üçün 10 Yol", titleEn: "10 Ways to Learn Programming", titleRu: "10 способов изучить программирование", category: "IT", date: "2026-01-15", views: 1250, comments: 24, author: "Rəşad Hüseynov", image: "/placeholder.svg", excerpt: "Proqramlaşdırma dünyasına ilk addımlarınızı atmaq üçün ən effektiv yollar..." },
  { id: 2, title: "UI/UX Dizaynda Son Trendlər", titleEn: "Latest Trends in UI/UX Design", titleRu: "Последние тренды в UI/UX дизайне", category: "Design", date: "2026-01-10", views: 980, comments: 18, author: "Günel Əliyeva", image: "/placeholder.svg", excerpt: "2026-cı ildə dizayn dünyasında nələr dəyişir..." },
  { id: 3, title: "Rəqəmsal Marketinqdə SEO Strategiyaları", titleEn: "SEO Strategies in Digital Marketing", titleRu: "SEO стратегии в цифровом маркетинге", category: "Marketing", date: "2026-01-05", views: 850, comments: 12, author: "Aynur Məmmədova", image: "/placeholder.svg", excerpt: "SEO ilə saytınızın görünürlüyünü artırın..." },
  { id: 4, title: "Data Science-da Karyera Qurmaq", titleEn: "Building a Career in Data Science", titleRu: "Карьера в Data Science", category: "IT", date: "2025-12-28", views: 1100, comments: 20, author: "Elçin Quliyev", image: "/placeholder.svg", excerpt: "Data Science sahəsində uğurlu karyera üçün məsləhətlər..." },
  { id: 5, title: "İngilis Dilini Effektiv Öyrənmək", titleEn: "Learn English Effectively", titleRu: "Эффективное изучение английского", category: "Language", date: "2025-12-20", views: 1500, comments: 35, author: "Leyla Həsənova", image: "/placeholder.svg", excerpt: "İngilis dilini sürətli və effektiv öyrənmək üçün praktiki məsləhətlər..." },
  { id: 6, title: "Layihə İdarəetməsinin Əsasları", titleEn: "Fundamentals of Project Management", titleRu: "Основы управления проектами", category: "Business", date: "2025-12-15", views: 720, comments: 10, author: "Kamran Nəsibov", image: "/placeholder.svg", excerpt: "Layihə idarəetməsinin əsas prinsipləri və alətləri..." },
  { id: 7, title: "Süni İntellekt və Gələcək", titleEn: "Artificial Intelligence and the Future", titleRu: "Искусственный интеллект и будущее", category: "IT", date: "2025-12-10", views: 2000, comments: 45, author: "Rəşad Hüseynov", image: "/placeholder.svg", excerpt: "AI texnologiyalarının təhsilə və iş dünyasına təsiri..." },
  { id: 8, title: "Müasir Veb Texnologiyalar", titleEn: "Modern Web Technologies", titleRu: "Современные веб-технологии", category: "IT", date: "2025-12-05", views: 890, comments: 16, author: "Elçin Quliyev", image: "/placeholder.svg", excerpt: "React, Next.js və müasir veb inkişafı..." },
  { id: 9, title: "Biznes Analitikada Yeni Yanaşmalar", titleEn: "New Approaches in Business Analytics", titleRu: "Новые подходы в бизнес-аналитике", category: "Business", date: "2025-11-28", views: 650, comments: 8, author: "Aynur Məmmədova", image: "/placeholder.svg", excerpt: "Data-driven qərar vermə prosesi..." },
];

const categories = [
  { key: "IT", count: 4 },
  { key: "Design", count: 1 },
  { key: "Marketing", count: 1 },
  { key: "Business", count: 2 },
  { key: "Language", count: 1 },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getPostTitle(
  post: (typeof blogPosts)[number],
  locale: string
): string {
  if (locale === "en") return post.titleEn;
  if (locale === "ru") return post.titleRu;
  return post.title;
}

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(
    locale === "az" ? "az-AZ" : locale === "ru" ? "ru-RU" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

/* ================================================================== */
/*  BLOG PAGE                                                          */
/* ================================================================== */

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  /* ---- Filter posts ---- */
  const filteredPosts = blogPosts.filter((post) => {
    const title = getPostTitle(post, locale).toLowerCase();
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesCategory =
      !activeCategory || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = blogPosts.slice(0, 3);

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */
  return (
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. PAGE HERO BANNER                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[320px] md:min-h-[380px] flex flex-col justify-center overflow-hidden">
        {/* Purple gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700" />
        <div className="absolute inset-0 bg-purple-900/60" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-purple-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4 text-purple-400" />
            <span className="text-white font-medium">{t("blog.title")}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            {t("blog.title")}
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. BLOG GRID WITH SIDEBAR                                   */}
      {/* ============================================================ */}
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* ====================================================== */}
            {/*  MAIN AREA (2/3)                                        */}
            {/* ====================================================== */}
            <div className="w-full lg:w-2/3">
              {/* Results count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "post" : "posts"}
                </p>
                {activeCategory && (
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    {t("courses.filterAll")} &times;
                  </button>
                )}
              </div>

              {/* No results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                  <Newspaper className="h-16 w-16 text-purple-200 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-500">
                    {t("common.noResults")}
                  </p>
                </div>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image placeholder */}
                    <div className="relative h-52 bg-purple-100 flex items-center justify-center overflow-hidden">
                      <Newspaper className="h-14 w-14 text-purple-300 group-hover:scale-110 transition-transform duration-500" />

                      {/* Category badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white shadow-sm">
                        {post.category}
                      </span>

                      {/* Date badge */}
                      <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700 backdrop-blur-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date, locale)}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                        {getPostTitle(post, locale)}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Author & meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author}
                          </p>
                        </div>
                      </div>

                      {/* Stats & Read more */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3.5 w-3.5" />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3.5 w-3.5" />
                            {post.comments}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors group/link"
                        >
                          {t("blog.readMore")}
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ====================================================== */}
            {/*  SIDEBAR (1/3)                                          */}
            {/* ====================================================== */}
            <aside className="w-full lg:w-1/3 space-y-8">
              {/* Search box */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-600" />
                  {t("common.search")}
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("blog.search")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-purple-600" />
                  {t("blog.categories")}
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.key}>
                      <button
                        onClick={() =>
                          setActiveCategory(
                            activeCategory === cat.key ? null : cat.key
                          )
                        }
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeCategory === cat.key
                            ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                            : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                        }`}
                      >
                        <span>{cat.key}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                            activeCategory === cat.key
                              ? "bg-white/20 text-white"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-purple-600" />
                  {t("blog.recentPosts")}
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.id}`}
                        className="group/recent flex gap-4 items-start"
                      >
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center overflow-hidden">
                          <Newspaper className="h-6 w-6 text-purple-300 group-hover/recent:scale-110 transition-transform" />
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover/recent:text-purple-700 transition-colors leading-snug">
                            {getPostTitle(post, locale)}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date, locale)}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
