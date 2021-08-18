import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {I18nManager} from 'react-native';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          '6THSTREET': '6THSTREET',
        },
      },
      ar: {
        translation: {
          '6THSTREET': '6 الشارع',
          WOMEN: 'امرأة',
          MEN: ' رجال',
          KIDS: 'صغار في السن',
          BEAUTY: 'جمال',
          Home: 'الصفحة الرئيسية',
          Categories: 'فئات',
          Brands: 'العلامات التجارية',
          Wishlist: 'قائمة الرغبات',
          Account: 'الحساب',
          'What are you looking for?': 'عما تبحث؟',
        },
      },
    },
    lng: I18nManager.isRTL ? 'ar' : 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
