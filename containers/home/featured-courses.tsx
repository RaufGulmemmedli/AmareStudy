"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpen, Users, Clock, ArrowRight } from "lucide-react";
import { featuredCourses } from "@/data/courses";
import { getCourseTitle } from "@/lib/helpers";
import { RatingStars } from "@/components/shared/rating-stars";

export function FeaturedCourses() {
  const t = useTranslations();
  const locale = useLocale();

  return (
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
          {featuredCourses.map((course) => (
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
  );
}
