import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ja", "zh-Hant"],
    fallbackLng: {
      "zh": ["zh-Hant"],
      "zh-TW": ["zh-Hant"],
      "default": ["zh-Hant"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: true
    }
  });
export default i18n;
