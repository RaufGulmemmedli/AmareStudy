"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, Clock, Award, Headphones } from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations();

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

  return (
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
  );
}
