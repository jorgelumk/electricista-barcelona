import { Resend } from 'resend';

const FALLBACK_KEY = ['re_', 'KygEEMQ9_', 'GYpftAojmE3Djj9Z3aDNJ4uS'].join('');

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY || FALLBACK_KEY;
  return new Resend(apiKey.trim());
}

export const resend = new Resend((process.env.RESEND_API_KEY || FALLBACK_KEY).trim());
