/**
 * Single source of truth for outbound contact links.
 * Used by the nav, footer and contact page.
 */

export const EMAIL = 'dikshyabc01@gmail.com'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/dikshya-chhetri/'

/** wa.me needs the number in international format, digits only. */
export const WHATSAPP_URL = 'https://wa.me/9779868168977'

/** Gmail web compose, pre-addressed to EMAIL. */
export const GMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`
