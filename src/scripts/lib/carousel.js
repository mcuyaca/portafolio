import { PROJECTS } from '../data/projects.js';
import { getLang } from './i18n.js';
import { TR } from '../data/translations.js';

let currentProj = 0;

export function getCurrentProj() {
  return currentProj;
}

export function renderProject(idx) {
  const p = PROJECTS[idx];
  const lang = getLang();
  const t = TR[lang];

  const projNum = document.getElementById('proj-num');
  const projTitle = document.getElementById('proj-title');
  const projDesc = document.getElementById('proj-desc');
  const projTags = document.getElementById('proj-tags');

  if (projNum) projNum.textContent = p.num;
  if (projTitle) projTitle.textContent = p.title;
  if (projDesc) projDesc.textContent = lang === 'es' && p.descEs ? p.descEs : p.desc;

  const projDemoLink = document.getElementById('proj-demo-link');
  const projGithubLink = document.getElementById('proj-github-link');

  if (projDemoLink) {
    projDemoLink.href = p.demoUrl || '#';
    projDemoLink.style.opacity = p.demoUrl ? '1' : '0.4';
    projDemoLink.style.pointerEvents = p.demoUrl ? 'auto' : 'none';
    if (!p.demoUrl) {
      projDemoLink.setAttribute('title', 'No demo available');
      projDemoLink.setAttribute('aria-label', 'No demo available for this project');
    } else {
      projDemoLink.removeAttribute('title');
      projDemoLink.removeAttribute('aria-label');
    }
  }
  if (projGithubLink) projGithubLink.href = p.githubUrl || '#';

  if (projTags) {
    projTags.innerHTML = p.tags.map(tag =>
      `<span class="tag">${tag}</span>`
    ).join('');
  }

  for (let i = 0; i < PROJECTS.length; i++) {
    const m = document.getElementById('mock-' + i);
    if (m) m.style.display = i === idx ? 'flex' : 'none';
  }

  const eyebrow = document.querySelector('.proj-eyebrow');
  if (eyebrow) eyebrow.innerHTML = p.num + ' · ' + (t?.featured || 'Featured');

  document.querySelectorAll('.proj-tab').forEach((tab, i) => {
    tab.classList.toggle('proj-tab-active', i === idx);
  });
}

export function lockFeaturedHeight() {
  const card = document.querySelector('.mc-projects-featured');
  if (!card) return;
  card.style.minHeight = '';
  let max = 0;
  for (let i = 0; i < PROJECTS.length; i++) {
    renderProject(i);
    max = Math.max(max, card.offsetHeight);
  }
  renderProject(currentProj);
  card.style.minHeight = max + 'px';
}

export function initCarousel() {
  const tabs = document.getElementById('proj-tabs');
  if (!tabs) return;
  tabs.addEventListener('click', e => {
    const tab = e.target.closest('.proj-tab');
    if (!tab) return;
    const idx = parseInt(tab.dataset.proj, 10);
    if (!isNaN(idx)) {
      currentProj = idx;
      renderProject(idx);
    }
  });

  renderProject(0);
  lockFeaturedHeight();
  if (document.fonts) document.fonts.ready.then(lockFeaturedHeight);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(lockFeaturedHeight, 150);
  });
}
