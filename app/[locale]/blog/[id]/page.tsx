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
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import { blogPosts, blogCategories, staticComments } from "@/data/blog-posts";
import { getPostTitle, formatDate } from "@/lib/helpers";
import { HeroBanner } from "@/components/shared/hero-banner";

/* ================================================================== */
/*  BLOG DETAIL PAGE                                                   */
/* ================================================================== */

export default function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const t = useTranslations();
  const locale = useLocale();

  const postId = parseInt(params.id, 10);
  const post = blogPosts.find((p) => p.id === postId);

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const recentPosts = blogPosts.slice(0, 3);

  /* ---- Handle form ---- */
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static — no real submission
    setCommentForm({ name: "", email: "", comment: "" });
  };

  /* ---- 404 fallback ---- */
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Newspaper className="h-20 w-20 text-purple-200 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Post not found
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold mt-4 transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {t("blog.title")}
          </Link>
        </div>
      </main>
    );
  }

  const title = getPostTitle(post, locale);
  const authorInitials = post.author
    .split(" ")
    .map((n) => n[0])
    .join("");

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */
  return (
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. PAGE HERO BANNER                                         */}
      {/* ============================================================ */}
      <HeroBanner
        title={title}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("blog.title"), href: "/blog" },
          { label: title },
        ]}
      >
        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-purple-200 mt-4">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date, locale)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            {post.views} {t("blog.views")}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
        </div>
      </HeroBanner>

      {/* ============================================================ */}
      {/*  2. MAIN CONTENT + SIDEBAR                                   */}
      {/* ============================================================ */}
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* ====================================================== */}
            {/*  LEFT — ARTICLE CONTENT (2/3)                           */}
            {/* ====================================================== */}
            <div className="w-full lg:w-2/3">
              {/* Featured image */}
              <div className="relative h-64 sm:h-80 md:h-96 bg-purple-100 rounded-2xl flex items-center justify-center overflow-hidden mb-8 border border-purple-200/40">
                <Newspaper className="h-20 w-20 text-purple-300" />
                <span className="absolute top-4 left-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-purple-600 text-white shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Article body */}
              <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
                {/* Reading time estimate */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>

                <div className="prose prose-gray max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                    Education is one of the most transformative forces in modern society. As technology evolves, so do the methods and approaches to learning. Whether you are starting a new career path or looking to enhance your existing skills, understanding the fundamentals of effective learning can make all the difference. In this article, we explore the key principles and strategies that can help you maximize your educational journey and achieve your professional goals.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">
                    The Importance of Structured Learning
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                    A structured approach to learning provides a clear roadmap for progress. When students follow a well-designed curriculum, they build knowledge systematically — each concept reinforcing the previous one. At AmareStudy, our courses are carefully crafted by industry experts to ensure that learners receive not just theoretical knowledge, but also practical, hands-on experience. Research consistently shows that structured learning environments lead to better retention, deeper understanding, and more successful outcomes compared to unstructured self-study approaches.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Practical Skills and Real-World Application
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                    The gap between academic knowledge and workplace readiness is a challenge many graduates face. Our approach bridges this divide by incorporating real-world projects, case studies, and collaborative exercises into every course. Students work on problems that mirror actual industry scenarios, developing both technical proficiency and the soft skills — communication, teamwork, critical thinking — that employers value most. This practical focus ensures that when you complete a course, you are truly prepared to apply what you have learned in a professional setting.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Community and Continuous Growth
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                    Learning does not happen in isolation. Being part of a vibrant community of fellow learners, mentors, and industry professionals creates an ecosystem of support and inspiration. At AmareStudy, we foster this sense of community through discussion forums, group projects, and networking events. We believe that the connections you make during your learning journey are just as valuable as the knowledge itself. Beyond the classroom, continuous learning and staying updated with the latest trends in your field are essential for long-term career success in today&apos;s rapidly changing world.
                  </p>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-100">
                  <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Share2 className="h-4 w-4" />
                    {t("blog.share")}:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-sm"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors shadow-sm"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>

              {/* ====================================================== */}
              {/*  3. COMMENTS SECTION                                    */}
              {/* ====================================================== */}
              <div className="mt-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MessageCircle className="h-7 w-7 text-purple-600" />
                  {t("blog.comments")}
                  <span className="text-base font-normal text-gray-400">
                    ({staticComments.length})
                  </span>
                </h2>

                {/* Comment list */}
                <div className="space-y-4">
                  {staticComments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6"
                    >
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                          {comment.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-sm font-bold text-gray-900">
                              {comment.name}
                            </h4>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(comment.date, locale)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {comment.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment form */}
                <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                    {t("blog.leaveComment")}
                  </h3>

                  <form
                    onSubmit={handleCommentSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("blog.commentName")}
                        </label>
                        <input
                          type="text"
                          value={commentForm.name}
                          onChange={(e) =>
                            setCommentForm({
                              ...commentForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-200 text-sm"
                          placeholder={t("blog.commentName")}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("blog.commentEmail")}
                        </label>
                        <input
                          type="email"
                          value={commentForm.email}
                          onChange={(e) =>
                            setCommentForm({
                              ...commentForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-200 text-sm"
                          placeholder={t("blog.commentEmail")}
                          required
                        />
                      </div>
                    </div>

                    {/* Comment text */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("blog.commentText")}
                      </label>
                      <textarea
                        rows={5}
                        value={commentForm.comment}
                        onChange={(e) =>
                          setCommentForm({
                            ...commentForm,
                            comment: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-200 text-sm resize-none"
                        placeholder={t("blog.commentText")}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                    >
                      {t("blog.submitComment")}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/*  RIGHT — STICKY SIDEBAR (1/3)                           */}
            {/* ====================================================== */}
            <aside className="w-full lg:w-1/3">
              <div className="lg:sticky lg:top-8 space-y-8">
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
                        <Link
                          href="/blog"
                          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                        >
                          <span>{cat.key}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-purple-100 text-purple-700">
                            {cat.count}
                          </span>
                        </Link>
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
                    {recentPosts.map((rPost) => (
                      <li key={rPost.id}>
                        <Link
                          href={`/blog/${rPost.id}`}
                          className="group/recent flex gap-4 items-start"
                        >
                          {/* Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center overflow-hidden">
                            <Newspaper className="h-6 w-6 text-purple-300 group-hover/recent:scale-110 transition-transform" />
                          </div>
                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover/recent:text-purple-700 transition-colors leading-snug">
                              {getPostTitle(rPost, locale)}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(rPost.date, locale)}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
