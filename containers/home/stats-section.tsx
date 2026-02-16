"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

export function StatsSection() {
  const t = useTranslations();

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

  return (
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
  );
}
