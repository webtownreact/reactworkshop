import './style.pcss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './src/modules/core/routers/router';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import('./config.json').then(console.log);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
      hu: {
        translation: {
          'Welcome to React': 'Udvozlet',
        },
      },
    },
    lng: 'hu', // if you're using a language detector, do not define the lng option
    fallbackLng: 'hu',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
