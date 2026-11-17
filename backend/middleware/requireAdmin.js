import { timingSafeEqual } from "node:crypto";

export function requireAdmin(req, res, next) {
    const expected = process.env.ADMIN_KEY

    if (!expected) {
        return res.status(503).json({ error: 'Admin actions are not configured.'})
    }

    const provided = String(req.get('x-admin-key') ?? '')
    const a = Buffer.from(provided)
    const b = Buffer.from(expected)

    if (a.length !== b.length || !timingSafeEqual(a, b)) {
        return res.status(401).json({ error: 'Unauthorized.'})
    }

    next()
}
