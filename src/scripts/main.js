import { initGrain } from './lib/grain.js';
import { initCursor } from './lib/cursor.js';
import { initProgressBar, initReveal } from './lib/scroll.js';
import { initClock } from './lib/clock.js';
import { initLang, applyLang } from './lib/i18n.js';
import { initCarousel } from './lib/carousel.js';
import { initForm } from './lib/form.js';

document.documentElement.classList.add('js-cursor');

const pre = document.getElementById('mc-preloader');
if (pre) {
  const hidePre = () => {
    pre.style.opacity = '0';
    pre.style.pointerEvents = 'none';
    setTimeout(() => pre.remove(), 650);
  };
  if (document.readyState === 'complete') {
    setTimeout(hidePre, 80);
  } else {
    window.addEventListener('load', () => setTimeout(hidePre, 80), { once: true });
  }
}

initGrain();
initCursor();
initProgressBar();
initClock();
initLang();
initCarousel();
initForm();
initReveal();

// Hero icon grid
(function buildIconGrid() {
  const grid = document.getElementById('hero-icons');
  if (!grid) return;
  const icons = ['command','bug','pc','branch','code-block','bracket-curly'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 360; i++) {
    const el = document.createElement('i');
    el.className = 'hn hn-' + icons[i % icons.length];
    frag.appendChild(el);
  }
  grid.appendChild(frag);
})();
