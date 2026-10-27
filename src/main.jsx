import React from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/vazirmatn/300.css';
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/700.css';
import '@fontsource/vazirmatn/800.css';

import './styles/base.css';
import './styles/chrome.css';
import './styles/hero.css';
import './styles/sections.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
