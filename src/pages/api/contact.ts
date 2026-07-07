import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';

export const prerender = false;

const PayloadSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email'),
  message: z.string().trim().min(1, 'Message is required').max(5000),
  token: z.string().min(1, 'Token is required'),
});

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const json = (body: object, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const parsed = PayloadSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return json({ error: first?.message ?? 'Validation failed' }, 400);
  }
  const { name, email, message, token } = parsed.data;

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

  const { error } = await resend.emails.send({
    from: 'Portfolio <contact@mcuyaca.dev>',
    to: 'mcuya.ca@gmail.com',
    replyTo: email,
    subject: `Portfolio — message from ${name}`,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ error: 'Failed to send message' }, 500);
  }

  return json({ success: true }, 200);
};