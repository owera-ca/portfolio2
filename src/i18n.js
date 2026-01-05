import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';
import pt from './locales/pt/translation.json';
import de from './locales/de/translation.json';
import it from './locales/it/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
        },
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            es: { translation: es },
            pt: { translation: pt }, // Mapped generally for 'BR' label usage
            de: { translation: de },
            it: { translation: it },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
