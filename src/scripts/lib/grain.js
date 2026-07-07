export function initGrain() {
  const svg = '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><filter id="gf"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#gf)" opacity="0.13"/></svg>';
  const url = 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
  document.querySelectorAll('[data-grain]').forEach(el => { el.style.backgroundImage = url; });
}
