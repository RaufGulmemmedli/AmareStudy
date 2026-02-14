"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Users,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Trophy,
  Linkedin,
  Twitter,
  ChevronRight,
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

const teamMembers = [
  { name: "Rəşad Hüseynov", role: "CEO & Founder", initials: "RH" },
  { name: "Aynur Məmmədova", role: "Academic Director", initials: "AM" },
  { name: "Elçin Quliyev", role: "Head of IT", initials: "EQ" },
  { name: "Günel Əliyeva", role: "Marketing Manager", initials: "GƏ" },
  { name: "Kamran Nəsibov", role: "Senior Instructor", initials: "KN" },
  { name: "Leyla Həsənova", role: "Student Relations", initials: "LH" },
];

const timelineItems = [
  { year: "2018", key: "timeline2018" },
  { year: "2020", key: "timeline2020" },
  { year: "2022", key: "timeline2022" },
  { year: "2024", key: "timeline2024" },
];

/* ================================================================== */
/*  ABOUT PAGE                                                         */
/* ================================================================== */

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");
  const tStats = useTranslations("stats");

  const stats = [
    {
      icon: GraduationCap,
      count: tStats("studentsCount"),
      label: tStats("students"),
    },
    { icon: BookOpen, count: tStats("coursesCount"), label: tStats("courses") },
    { icon: Users, count: tStats("teachersCount"), label: tStats("teachers") },
    { icon: Trophy, count: tStats("awardsCount"), label: tStats("awards") },
  ];

  const values = [
    { icon: Lightbulb, key: "value1", descKey: "value1Desc" },
    { icon: Award, key: "value2", descKey: "value2Desc" },
    { icon: Users, key: "value3", descKey: "value3Desc" },
    { icon: TrendingUp, key: "value4", descKey: "value4Desc" },
  ];

  return (
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. PAGE HERO BANNER                                          */}
      {/* ============================================================ */}
      <section className="relative min-h-[340px] md:min-h-[400px] flex flex-col justify-center overflow-hidden">
        {/* Purple gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700" />
        <div className="absolute inset-0 bg-primary/20" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb: Home > About */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-purple-200/90 [&>li]:text-purple-200/90">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-white transition-colors">
                    {tNav("home")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-purple-300/70">
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-medium">
                  {t("title")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-sm">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. MISSION & VISION SECTION                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="group p-8 md:p-10 rounded-2xl bg-purple-50/80 border border-purple-100/60 hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("mission")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("missionDesc")}
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 md:p-10 rounded-2xl bg-purple-50/80 border border-purple-100/60 hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("vision")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("visionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. OUR VALUES SECTION                                        */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("values")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {t("valuesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-6 md:p-8 rounded-2xl bg-white border border-purple-100/50 shadow-sm hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {t(value.key)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. OUR HISTORY / TIMELINE                                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("historyTitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {t("historyDesc")}
            </p>
          </div>

          {/* Vertical timeline with decorative dots and lines */}
          <div className="relative max-w-2xl mx-auto pl-2">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-500 to-purple-200" />

            <div className="space-y-0">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-6 md:gap-10 py-8 first:pt-0 last:pb-0"
                >
                  {/* Decorative dot */}
                  <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg ring-4 ring-purple-100" />

                  {/* Content */}
                  <div className="flex-1 min-w-0 pl-2">
                    <span className="text-2xl md:text-3xl font-bold text-primary font-display">
                      {item.year}
                    </span>
                    <p className="text-gray-700 font-medium mt-1">
                      {t(item.key)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. TEAM SECTION                                              */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-purple-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("teamTitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {t("teamDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-purple-100/50 shadow-sm hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar placeholder - purple gradient with initials */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. STATS BAR                                                 */}
      {/* ============================================================ */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/20 text-white mb-4">
                    <Icon className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">
                    {stat.count}
                  </div>
                  <div className="text-sm md:text-base font-medium text-purple-100 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
