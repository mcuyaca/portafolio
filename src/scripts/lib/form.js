import { getLang } from './i18n.js';
import { TR } from '../data/translations.js';

export function initForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  const submitBtn = document.getElementById('form-submit');
  const submitText = document.getElementById('form-submit-text');
  const feedback = document.getElementById('form-feedback');

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className = 'form-feedback form-feedback-' + type;
    feedback.style.display = 'block';
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const message = document.getElementById('f-msg').value.trim();
    const token = document.querySelector('[name="cf-turnstile-response"]')?.value;

    if (!name || !email || !message) {
      showFeedback('Please fill in all fields.', 'error');
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.6'; }
    if (submitText) submitText.textContent = 'Sending…';
    if (feedback) feedback.style.display = 'none';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showFeedback('✓ Message sent. I\'ll reply within 24h.', 'success');
        contactForm.reset();
        if (window.turnstile) window.turnstile.reset();
      } else {
        showFeedback(data.error || 'Something went wrong. Try again.', 'error');
        if (window.turnstile) window.turnstile.reset();
      }
    } catch {
      showFeedback('Network error. Check your connection.', 'error');
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
      if (submitText) submitText.textContent = TR[getLang()]?.formSend || 'Send Message';
    }
  });
}
