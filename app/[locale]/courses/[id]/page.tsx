"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  BookOpen, Star, Users, Clock, ChevronRight, BarChart,
  Award, Globe, Play, CheckCircle, ChevronDown, ChevronUp, Quote,
} from "lucide-react";
import { allCourses, staticReviews } from "@/data/courses";
import { getCourseTitle } from "@/lib/helpers";
import { RatingStars } from "@/components/shared/rating-stars";
import { HeroBanner } from "@/components/shared/hero-banner";

function InteractiveStars({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              i < (hover || value)
                ? "fill-gold-500 text-gold-500"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  COURSE DETAIL PAGE                                                 */
/* ================================================================== */

export default function CourseDetailPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const t = useTranslations();
  const locale = useLocale();

  const courseId = Number(params.id);
  const course = allCourses.find((c) => c.id === courseId) || allCourses[0];
  const courseTitle = getCourseTitle(course, locale);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || reviewRating === 0 || !reviewComment.trim()) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewName("");
      setReviewRating(0);
      setReviewComment("");
      setReviewSubmitted(false);
    }, 3000);
  };

  const modules = [
    { title: "Module 1: Introduction & Fundamentals", lessons: 6, duration: "2 hours" },
    { title: "Module 2: Core Concepts & Theory", lessons: 8, duration: "3 hours" },
    { title: "Module 3: Practical Applications", lessons: 10, duration: "4 hours" },
    { title: "Module 4: Advanced Techniques", lessons: 7, duration: "3 hours" },
    { title: "Module 5: Final Project & Assessment", lessons: 5, duration: "2 hours" },
  ];

  const learnings = [
    "Master the core fundamentals and best practices",
    "Build real-world projects from scratch",
    "Understand industry-standard tools and workflows",
    "Develop problem-solving and analytical skills",
    "Earn a professional certificate upon completion",
    "Join a community of like-minded professionals",
  ];

  const requirements = [
    "Basic computer literacy and internet access",
    "No prior experience needed for beginner courses",
    "A laptop or desktop computer",
    "Motivation and willingness to learn",
  ];

  const relatedCourses = allCourses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* 1. PAGE HERO */}
      <HeroBanner
        title={courseTitle}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.courses"), href: "/courses" },
          { label: courseTitle },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-purple-100/90 mt-4">
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold-400 text-gold-400" />{course.rating}</span>
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students} {t("courses.students")}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/15 border border-white/20">{course.category}</span>
        </div>
      </HeroBanner>

      {/* 2. MAIN CONTENT - Two Columns */}
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column (2/3) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("courseDetail.overview")}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This comprehensive course is designed to give you a thorough understanding of {course.title}. Through a combination of theoretical lessons and hands-on projects, you will develop practical skills that are directly applicable to real-world scenarios.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are just starting your journey or looking to advance your existing skills, this course provides a structured learning path tailored to help you succeed. Our expert instructors guide you every step of the way, ensuring you gain confidence and competence in the subject matter.
                </p>
              </div>

              {/* Curriculum Accordion */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t("courseDetail.curriculum")}</h2>
                <div className="space-y-3">
                  {modules.map((mod, index) => {
                    const isOpen = openModule === index;
                    return (
                      <div key={index} className="rounded-xl border border-purple-100/60 overflow-hidden bg-purple-50/30 hover:bg-purple-50/50 transition-colors">
                        <button type="button" onClick={() => setOpenModule(isOpen ? null : index)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">{index + 1}</div>
                            <span className="font-semibold text-gray-900">{mod.title}</span>
                          </div>
                          {isOpen ? <ChevronUp className="h-5 w-5 text-purple-600 shrink-0" /> : <ChevronDown className="h-5 w-5 text-purple-600 shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 pt-0">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                              <span className="flex items-center gap-1"><Play className="h-3.5 w-3.5" />{mod.lessons} lessons</span>
                              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{mod.duration}</span>
                            </div>
                            <ul className="space-y-2">
                              {Array.from({ length: Math.min(mod.lessons, 4) }).map((_, li) => (
                                <li key={li} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                  Lesson {li + 1}: Topic {li + 1} overview and practice
                                </li>
                              ))}
                              {mod.lessons > 4 && <li className="text-sm text-gray-400 pl-6">+{mod.lessons - 4} more lessons</li>}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What You Will Learn */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t("courseDetail.whatYouLearn")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learnings.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t("courseDetail.requirements")}</h2>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-2" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (1/3) - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100/50 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600" />
                  <div className="relative h-44 bg-purple-100 rounded-xl flex items-center justify-center mb-6 overflow-hidden group cursor-pointer">
                    <BookOpen className="h-16 w-16 text-purple-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Play className="h-6 w-6 text-purple-700 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-purple-700 font-display">{course.price} &#8380;</span>
                  </div>
                  <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg mb-6">{t("courseDetail.enrollNow")}</button>
                  <div className="space-y-0">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500"><Clock className="h-4 w-4" />{t("courses.duration")}</span>
                      <span className="text-sm font-semibold text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500"><BarChart className="h-4 w-4" />{t("courses.level")}</span>
                      <span className="text-sm font-semibold text-gray-900">{t(`courses.${course.level}`)}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500"><Users className="h-4 w-4" />{t("courses.students")}</span>
                      <span className="text-sm font-semibold text-gray-900">{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500"><Star className="h-4 w-4" />{t("courses.rating")}</span>
                      <span className="text-sm font-semibold text-gray-900">{course.rating} / 5</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="flex items-center gap-2 text-sm text-gray-500"><Globe className="h-4 w-4" />Language</span>
                      <span className="text-sm font-semibold text-gray-900">AZ / EN / RU</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTRUCTOR SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t("courseDetail.instructor")}</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-purple-50/60 rounded-2xl p-6 md:p-8 border border-purple-100/50">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">RH</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Rashad Huseynov</h3>
              <p className="text-sm text-gold-600 font-medium mb-3">Senior Instructor &bull; {course.category} Expert</p>
              <p className="text-gray-600 leading-relaxed text-sm">With over 10 years of industry experience and a passion for teaching, Dr. Huseynov has helped hundreds of students launch successful careers. He specializes in {course.category} and brings a practical, hands-on approach to every lesson.</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-gold-500 text-gold-500" />4.8 Rating</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" />2,400+ Students</span>
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />12 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t("courseDetail.reviews")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {staticReviews.map((review) => (
              <div key={review.id} className="relative bg-white rounded-2xl p-6 border border-purple-100/50 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-purple-200 mb-3" />
                <RatingStars rating={review.rating} />
                <p className="text-gray-600 leading-relaxed mt-3 mb-5 text-sm italic">{`"${review.comment}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">{review.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.date}</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-3xl rounded-tr-2xl" />
              </div>
            ))}
          </div>
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6">{t("courseDetail.writeReview")}</h3>
            {reviewSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center bg-white rounded-2xl border border-green-200">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3"><CheckCircle className="h-8 w-8 text-green-600" /></div>
                <p className="text-lg font-semibold text-gray-900">Thank you for your review!</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-5">
                <div>
                  <label htmlFor="reviewName" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input id="reviewName" type="text" value={reviewName} onChange={(e) => setReviewName(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("courses.rating")}</label>
                  <InteractiveStars value={reviewRating} onChange={setReviewRating} />
                </div>
                <div>
                  <label htmlFor="reviewComment" className="block text-sm font-semibold text-gray-700 mb-2">Comment</label>
                  <textarea id="reviewComment" rows={4} value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 resize-none focus:ring-2 focus:ring-purple-600 focus:outline-none transition-colors" placeholder="Share your experience..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">{t("common.submit")}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. RELATED COURSES */}
      {relatedCourses.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t("courseDetail.relatedCourses")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedCourses.map((rc) => (
                <div key={rc.id} className="card-hover group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="relative h-48 bg-purple-100 flex items-center justify-center overflow-hidden">
                    <BookOpen className="h-16 w-16 text-purple-300 group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white shadow-sm">{rc.category}</span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-1">{getCourseTitle(rc, locale)}</h3>
                    <RatingStars rating={rc.rating} />
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{rc.students}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{rc.duration}</span>
                    </div>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-purple-700">{rc.price} &#8380;</span>
                      <Link href={`/courses/${rc.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors">
                        {t("courses.details")}<ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
