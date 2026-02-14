import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
