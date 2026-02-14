"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Email validation regex                                             */
/* ------------------------------------------------------------------ */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ------------------------------------------------------------------ */
/*  FAQ item type                                                      */
/* ------------------------------------------------------------------ */
type FAQItem = {
  questionKey: string;
  answerKey: string;
};

/* ================================================================== */
/*  CONTACT PAGE                                                       */
/* ================================================================== */

export default function ContactPage() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");

  /* ---- Form state ---- */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---- FAQ accordion state ---- */
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* ---- Contact info cards ---- */
  const contactCards = [
    {
      icon: MapPin,
      labelKey: "address",
      valueKey: "addressValue",
    },
    {
      icon: Phone,
      labelKey: "phone",
      valueKey: "phoneValue",
    },
    {
      icon: Mail,
      labelKey: "email",
      valueKey: "emailValue",
    },
    {
      icon: Clock,
      labelKey: "workingHours",
      valueKey: "workingHoursValue",
    },
  ];

  /* ---- FAQ items ---- */
  const faqItems: FAQItem[] = [
    { questionKey: "faq1Question", answerKey: "faq1Answer" },
    { questionKey: "faq2Question", answerKey: "faq2Answer" },
    { questionKey: "faq3Question", answerKey: "faq3Answer" },
    { questionKey: "faq4Question", answerKey: "faq4Answer" },
    { questionKey: "faq5Question", answerKey: "faq5Answer" },
  ];

  /* ---- Form validation ---- */
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "required";
    if (!email.trim()) newErrors.email = "required";
    else if (!EMAIL_REGEX.test(email)) newErrors.email = "invalid";
    if (!subject.trim()) newErrors.subject = "required";
    if (!message.trim()) newErrors.message = "required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---- Form submit ---- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setTimeout(() => setIsSuccess(false), 3000);
    }, 600);
  };

  return (
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. PAGE HERO BANNER                                          */}
      {/* ============================================================ */}
      <section className="relative min-h-[320px] md:min-h-[380px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600" />
        <div className="absolute inset-0 bg-[#6B3FA0]/40" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-purple-200/90">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-purple-300/70" />
                <span className="text-white font-medium">{t("title")}</span>
              </li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-sm">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. CONTACT INFO CARDS                                        */}
      {/* ============================================================ */}
      <section className="relative py-16 md:py-20 -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-purple-900/5 border border-purple-100/50 hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-200/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#6B3FA0] text-white mb-5 shadow-lg shadow-purple-600/25 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-600/30 transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-2">
                    {t(card.labelKey)}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {t(card.valueKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. CONTACT FORM + MAP                                        */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl shadow-purple-900/5 border border-purple-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#6B3FA0] flex items-center justify-center text-white shadow-lg shadow-purple-600/25">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
                  {t("title")}
                </h2>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 ring-4 ring-green-200/50">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {t("successMessage")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("nameLabel")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-[#6B3FA0] focus:ring-[#6B3FA0]/20"
                      } focus:ring-4 focus:outline-none`}
                      placeholder={t("nameLabel")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {t("errorRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("emailLabel")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-[#6B3FA0] focus:ring-[#6B3FA0]/20"
                      } focus:ring-4 focus:outline-none`}
                      placeholder={t("emailLabel")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email === "required"
                          ? t("errorRequired")
                          : t("errorInvalidEmail")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("subjectLabel")}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-[#6B3FA0] focus:ring-[#6B3FA0]/20"
                      } focus:ring-4 focus:outline-none`}
                      placeholder={t("subjectLabel")}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {t("errorRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("messageLabel")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 resize-none transition-colors ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-[#6B3FA0] focus:ring-[#6B3FA0]/20"
                      } focus:ring-4 focus:outline-none`}
                      placeholder={t("messageLabel")}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {t("errorRequired")}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#DAA520] hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                    {t("sendButton")}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200/60 shadow-xl shadow-purple-900/5 bg-gradient-to-br from-purple-50 via-purple-50/50 to-gold-50/30 min-h-[400px] lg:min-h-[500px]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B3FA0] via-[#DAA520] to-[#6B3FA0]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-[#6B3FA0]/15 flex items-center justify-center mb-6 ring-4 ring-purple-200/50">
                  <MapPin className="h-12 w-12 text-[#6B3FA0]" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {t("mapTitle")}
                </h3>
                <p className="text-gray-700 font-medium max-w-sm leading-relaxed">
                  {t("addressValue")}
                </p>
                <div className="mt-8 w-full max-w-xs h-48 rounded-xl bg-white/80 border-2 border-dashed border-purple-300/60 flex flex-col items-center justify-center gap-3 shadow-inner">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200/50 to-gold-200/50 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-[#6B3FA0]" />
                  </div>
                  <span className="text-sm font-medium text-purple-600/80">
                    {t("mapTitle")}
                  </span>
                  <span className="text-xs text-gray-500">
                    {t("locationShort")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. FAQ SECTION                                                */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-[#6B3FA0] flex items-center justify-center text-white shadow-lg shadow-purple-600/25">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
              {t("faqTitle")}
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border-2 border-purple-100/60 overflow-hidden bg-purple-50/30 hover:bg-purple-50/50 hover:border-purple-200/60 transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:text-[#6B3FA0] transition-colors"
                  >
                    <span>{t(item.questionKey)}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#6B3FA0] shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#6B3FA0] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-0 border-t border-purple-100/50">
                      <p className="pt-4 text-gray-600 leading-relaxed">
                        {t(item.answerKey)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
