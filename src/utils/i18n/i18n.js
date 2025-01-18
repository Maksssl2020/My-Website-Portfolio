import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "../locales/en.json";
import plLang from "../locales/pl.json";

const resources = {
  en: {
    translation: enLang,
  },
  pl: {
    translation: plLang,
  },
};

i18next.use(initReactI18next).init({
  resources,
  debug: true,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
