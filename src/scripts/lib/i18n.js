import { TR } from '../data/translations.js';

let lang = 'en';

export function getLang() {
  return lang;
}

export function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  const t = TR[l];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  const enPill = document.getElementById('lang-en');
  const esPill = document.getElementById('lang-es');
  if (enPill && esPill) {
    enPill.classList.toggle('lang-active', l === 'en');
    esPill.classList.toggle('lang-active', l === 'es');
    enPill.style.borderColor = l === 'en' ? 'rgba(245,240,230,0.25)' : 'rgba(245,240,230,0.1)';
    esPill.style.borderColor = l === 'es' ? 'rgba(245,240,230,0.25)' : 'rgba(245,240,230,0.1)';
  }
}

export function initLang() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'en' ? 'es' : 'en');
  });
  applyLang('en');
}
