"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const quickLinkPaths = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "courses", href: "/courses" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] text-white">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section - 4 columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, About, Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-purple-300">Amare</span>
                <span className="text-gold-400">Study</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-300">
              {t("aboutText")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-white/5 text-gray-400 transition-all duration-300",
                    "hover:bg-gold-500/20 hover:text-gold-400 hover:scale-110"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinkPaths.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className={cn(
                      "text-sm text-gray-400 transition-colors duration-200",
                      "hover:text-gold-400"
                    )}
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-white">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm text-gray-400">
                  {tContact("addressValue")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                <a
                  href={`tel:${tContact("phoneValue").replace(/\s/g, "")}`}
                  className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                >
                  {tContact("phoneValue")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${tContact("emailValue")}`}
                  className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                >
                  {tContact("emailValue")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm text-gray-400">
                  {tContact("workingHoursValue")}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-white">
              {t("newsletter")}
            </h3>
            <p className="text-sm text-gray-400">{t("newsletterDesc")}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={t("newsletterPlaceholder")}
                className={cn(
                  "h-11 flex-1 border-white/10 bg-white/5 text-white",
                  "placeholder:text-gray-500 focus-visible:ring-gold-500/50",
                  "focus-visible:border-gold-500/50"
                )}
              />
              <Button
                type="submit"
                className={cn(
                  "h-11 shrink-0 gap-2 bg-gold-500 px-6 font-medium",
                  "text-gray-900 hover:bg-gold-400"
                )}
              >
                <Send className="h-4 w-4" />
                {t("subscribe")}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-500">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
