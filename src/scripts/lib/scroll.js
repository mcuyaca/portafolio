export function initProgressBar() {
  const bar = document.getElementById('mc-progress');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && total > 0) bar.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });
}

export function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0) translateX(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    const dir = el.dataset.revealDir;
    el.style.opacity = '0';
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s`;
    if (dir === 'left') el.style.transform = 'translateX(-28px)';
    else if (dir === 'right') el.style.transform = 'translateX(28px)';
    else el.style.transform = 'translateY(28px)';
    obs.observe(el);
  });
}
