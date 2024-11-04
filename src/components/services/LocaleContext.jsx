import React, { createContext, useState, useContext, useEffect } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const defaultLang = localStorage.getItem('language') || 'en-US';
  const [locale, setLocale] = useState(defaultLang);
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);