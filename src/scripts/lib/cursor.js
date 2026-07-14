export function initCursor() {
  const cursor = document.getElementById('mc-cursor');
  if (!cursor) return;

  const curH = cursor.querySelector('.cur-h');
  const curV = cursor.querySelector('.cur-v');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a,button,.proj-tab').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (curH) { curH.style.background = '#F5F0E6'; curH.style.opacity = '0.9'; }
      if (curV) { curV.style.background = '#F5F0E6'; curV.style.opacity = '0.9'; }
    });
    el.addEventListener('mouseleave', () => {
      if (curH) { curH.style.background = 'oklch(62% 0.20 50)'; curH.style.opacity = '0.55'; }
      if (curV) { curV.style.background = 'oklch(62% 0.20 50)'; curV.style.opacity = '0.55'; }
    });
  });
}
