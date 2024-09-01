import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "../public/Locale/En.json";
import translationAr from "../public/Locale/Ar.json";
import languagedetector from "i18next-browser-languagedetector";
//translation package configration
const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};
const storedLanguage = localStorage.getItem("language");

i18n
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage || "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
