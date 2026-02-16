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
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { getPostTitle, formatDate } from "@/lib/helpers";
import { HeroBanner } from "@/components/shared/hero-banner";

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
      <HeroBanner
        title={t("blog.title")}
        subtitle={t("blog.subtitle")}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("blog.title") },
        ]}
      />

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
                  {blogCategories.map((cat) => (
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
