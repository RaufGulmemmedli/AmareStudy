"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function HeroBanner({ title, subtitle, breadcrumbs, children }: HeroBannerProps) {
  return (
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
        <nav className="flex items-center gap-2 text-sm text-purple-200 mb-6 flex-wrap">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4 text-purple-400" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
