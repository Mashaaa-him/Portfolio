import { rateLimit } from 'express-rate-limit'

// Loose cap for the whole API
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 300,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests. Try again later.' },
})

// Strict cap for posting to the guestbook
export const guestbookPostLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: "You've posted a lot lately. Try again in a bit." },
})