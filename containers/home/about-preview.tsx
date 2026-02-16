"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GraduationCap, BookOpen, Trophy, ArrowRight } from "lucide-react";

export function AboutPreview() {
  const t = useTranslations();

  return (
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
  );
}
