import { Router } from 'express'
import { readFile, writeFile } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { guestbookPostLimiter, adminLimiter } from '../middleware/ratelimits.js'
import { requireAdmin } from '../middleware/requireAdmin.js'
import { error } from 'node:console'

const router = Router()
const FILE = new URL('../data/guestbook.json', import.meta.url)

async function readEntries() {
  try {
    return JSON.parse(await readFile(FILE, 'utf8'))
  } catch (err) {
    if (err.code === 'ENOENT') return [] // file doesn't exist yet
    throw err
  }
}

router.get('/', async (req, res, next) => {
  try {
    const entries = await readEntries()
    res.json([...entries].reverse()) // newest first
  } catch (err) {
    next(err)
  }
})

router.post('/', guestbookPostLimiter, async (req, res, next) => {
  console.log('1: handler reached') // DEBUG, remove later
  try {
    const name = String(req.body?.name ?? '').trim()
    const message = String(req.body?.message ?? '').trim()
    console.log('2: body read', { name, message }) // DEBUG

    const errors = {}
    if (!name) errors.name = 'Please add your name.'
    else if (name.length > 40) errors.name = 'Name must be 40 characters or fewer.'

    if (!message) errors.message = 'Please write a message.'
    else if (message.length > 280) errors.message = 'Message must be 280 characters or fewer.'

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors })
    }

    const entry = {
      id: randomUUID(),
      name,
      message,
      createdAt: new Date().toISOString(),
    }

    const entries = await readEntries()
    console.log('3: entries read', entries.length) // DEBUG
    entries.push(entry)
    await writeFile(FILE, JSON.stringify(entries, null, 2))
    console.log('4: file written') // DEBUG

    res.status(201).json(entry)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', adminLimiter, requireAdmin, async (req, res, next) => {
  try {
    const entries = await readEntries()
    const remaining = entries.filter((e) => e.id !== req.params.id)

    if (remaining.length === entries.length) {
      return res.status(404).json({ error: 'Entry not found.'})
    }

    await writeFile(FILE, JSON.stringify(remaining, null, 2))
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

export default router