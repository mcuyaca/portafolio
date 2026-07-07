export function initClock() {
  const clock = document.getElementById('footer-clock');
  function tick() {
    if (!clock) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'America/Lima',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
    clock.textContent = timeStr;
  }
  tick();
  setInterval(tick, 1000);
}
