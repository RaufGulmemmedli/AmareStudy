"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LOCALES = [
  { code: "az", label: "AZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
] as const;

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/courses", key: "courses" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="font-bold text-2xl tracking-tight transition-colors duration-300">
            <span className={isScrolled ? "text-[#6B3FA0]" : "text-white"}>Amare</span>
            <span className={isScrolled ? "text-[#DAA520]" : "text-[#FFD740]"}>Study</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Center */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {NAV_LINKS.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300",
                isScrolled
                  ? "text-gray-700 hover:text-[#6B3FA0]"
                  : "text-white/90 hover:text-white",
                isActive(href) && (isScrolled ? "text-[#6B3FA0]" : "text-white")
              )}
            >
              {t(key)}
              {isActive(href) && (
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors duration-300",
                    isScrolled ? "bg-[#6B3FA0]" : "bg-[#FFD740]"
                  )}
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Language Switcher + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "gap-1.5 font-medium transition-colors duration-300",
                  isScrolled
                    ? "text-gray-700 hover:text-[#6B3FA0] hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
                aria-label={t("language")}
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {LOCALES.find((l) => l.code === locale)?.label ?? "EN"}
                </span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[100px]">
              {LOCALES.map(({ code, label }) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => handleLocaleChange(code)}
                  className={cn(
                    "cursor-pointer",
                    locale === code && "bg-purple-50 text-[#6B3FA0] font-medium"
                  )}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button - Desktop */}
          <Link href="/courses" className="hidden sm:block">
            <Button
              className={cn(
                "font-semibold shadow-md hover:shadow-lg transition-all duration-300",
                isScrolled
                  ? "bg-[#6B3FA0] hover:bg-[#5a2d8a] text-white"
                  : "bg-[#DAA520] hover:bg-[#c49619] text-white"
              )}
              size="sm"
            >
              {t("enroll")}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden transition-colors duration-300",
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "border-t transition-colors duration-300",
            isScrolled ? "border-gray-100 bg-white" : "border-gray-200/50 bg-white/95 backdrop-blur-md"
          )}
        >
          <div className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive(href)
                    ? "bg-purple-50 text-[#6B3FA0]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#6B3FA0]"
                )}
              >
                {t(key)}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-gray-100">
              <Link
                href="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-lg bg-[#6B3FA0] text-white font-semibold hover:bg-[#5a2d8a] transition-colors"
              >
                {t("enroll")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
