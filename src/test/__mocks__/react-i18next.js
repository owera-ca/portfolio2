export const useTranslation = jest.fn(() => ({
    t: (str) => str,
    i18n: {
        changeLanguage: jest.fn().mockImplementation(() => new Promise((resolve) => resolve())),
        resolvedLanguage: 'en',
        language: 'en',
    },
}));

export const initReactI18next = {
    type: '3rdParty',
    init: jest.fn(),
};
