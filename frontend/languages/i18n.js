import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { welcome: "Welcome", add_to_cart: "Add to Cart" } },
  fr: { translation: { welcome: "Bienvenue", add_to_cart: "Ajouter au panier" } },
  ar: { translation: { welcome: "مرحبا", add_to_cart: "أضف إلى السلة" } }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // 
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
