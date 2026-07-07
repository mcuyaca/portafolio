import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const json = (body: object, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let body: { name?: string; email?: string; message?: string; token?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const { name, email, message, token } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !token) {
    return json({ error: 'Missing required fields' }, 400);
  }

  // Verify Turnstile token
  const verification = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: import.meta.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const { success } = await verification.json();
  if (!success) {
    return json({ error: 'Bot verification failed' }, 403);
  }

  // Send via Resend
  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'mcuya.ca@gmail.com',
    replyTo: email.trim(),
    subject: `Portfolio — message from ${name.trim()}`,
    html: `
      <p><strong>From:</strong> ${name.trim()} &lt;${email.trim()}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message.trim().replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ error: 'Failed to send message' }, 500);
  }

  return json({ success: true }, 200);
};
