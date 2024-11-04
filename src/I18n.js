// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageFromStorage = localStorage.getItem('language') || 'en'; // Load language from localStorage or default to 'en'

i18n
  .use(LanguageDetector) // Language detector for detecting from URL
  .use(initReactI18next)
  .init({
    lng: languageFromStorage, // Set the initial language from localStorage
    fallbackLng: 'en', // Default language
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'path', 'querystring'], // Order of language detection
      lookupLocalStorage: 'language', // Key to look for in localStorage
    },
    resources: {
      en: {
        translation: {
          "Company": "Company",
          "Home": 'Home',
          "About": 'About Us',
          "Products": 'Our Products',
          "Contact": 'Contact Us',
          "logo slogan": 'Paints that you can depend on in your everyday life',
          "Contact Info": 'Contact Info',
          "Contact Information": 'Contact Information',
          "Reach Out for More Information and Support": "Reach Out for More Information and Support",
          "Send us a Massage": 'Send us a Massage',
          "Have Questions?": 'Have Questions?',
          "Address": 'Address',
          "Our Latest Products": "Our Latest Products",
          "Discover What's New and Innovative": "Discover What's New and Innovative",
          "Team members": "Our Team members",
          "Meet the Experts Behind Our Success": "Meet the Experts Behind Our Success",
          "Get in touch with us": "Get in touch with us",
          "Get in Touch": "Get in Touch",
          "Name": "Name",
          "Email": "Email",
          "Phone": "Phone",
          "Message": "Message",
        },
      },
      ar: {
        translation: {
          "Company": "الشركة",
          "Home": 'الرئيسية',
          "About": 'عن الشركة',
          "Products": 'منتجاتنا',
          "Contact": 'اتصل بنا',
          "logo slogan": 'دهانات يمكنك الاعتماد عليها في حياتك اليومية',
          "Contact Info": 'معلومات التواصل',
          "Contact Information": 'معلومات التواصل',
          "Reach Out for More Information and Support": "تواصل معنا للحصول على المزيد من المعلومات والدعم",
          "Send us a Massage": 'تواصل معنا',
          "Have Questions?": 'لديك سؤال؟',
          "Address:": 'العنوان',
          "Our Latest Products": "اخر منتجاتنا",
          "Discover What's New and Innovative": "اكتشف ما هو جديد ومبتكر",
          "Team members": "تعرّف على فريق فكستون",
          "Meet the Experts Behind Our Success": "تعرف على نخبة خبرائنا في عالم الدهانات",
          "Get in touch with us": "لا تتردد في التواصل معنا",
          "Get in Touch": "تواصل",
          "Name": "الاسم",
          "Email": "البريد الالكتروني",
          "Phone": "الهانف",
          "Message": "الرسالة",
        },
      },
    },
  });

export default i18n;
