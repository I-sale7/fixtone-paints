// LanguageSwitcher.js
import React, { useState } from 'react';
import i18n from './../../I18n'; // Import your i18n configuration
import { Link } from 'react-router-dom';
import { useLocale } from '../services/LocaleContext';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  const handleLanguageChange = (newLang) => {
    // Change the language in i18next
    i18n.changeLanguage(newLang);
    // Save the selected language to localStorage
    localStorage.setItem('language', newLang);
    setLocale(newLang);

    setTimeout(() => {
      toggleLanguage(newLang);
    }, 0);
  };
  
  const toggleLanguage = (language)=> {
    return locale === language? 'd-none' : '';
  };

  return (
    <div className='ms-3' style={{background: '#fbb702', color: 'white', padding: '6px 12px', borderRadius: '12px'}}>
      <Link className={toggleLanguage('en-US')} style={{color: 'white'}} onClick={() => handleLanguageChange('en-US')}> English </Link>
      <Link className={toggleLanguage('ar')} style={{color: 'white'}} onClick={() => handleLanguageChange('ar')}> عربي </Link>
    </div>
  );
};

export default LanguageSwitcher;