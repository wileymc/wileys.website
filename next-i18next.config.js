module.exports = {
  debug: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "it", "pt", "de", "jp", "fr", "ru", "zh"],
  },
  localeExtension: "yaml",
  defaultNS: "common",
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  languageMap: {
    en: "English",
    es: "Español",
    it: "Italiano",
    pt: "Português",
    de: "Deutsch",
    jp: "日本語",
    fr: "Français",
    ru: "Русский",
    zh: "中文",
  },
};
