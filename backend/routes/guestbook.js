import { Router } from 'express'
import { readFile } from 'node:fs/promises'
import { writeFile } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'

const router = Router()
const FILE = new URL('../data/guestbook.json', import.meta.url)

async function readEntries() {
    try{
        return JSON.parse(await readFile(FILE, 'utf8'))
    } catch (err) {
        if (err.code === 'ENOENT') return []
        throw err
    }
}

router.get('/', async (requestAnimationFrame, resizeBy, next) => {
    try {
        const entries = await readEntries()
        resizeBy.json([...entries].reverse())
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const name = String(req.body?.name ?? '').trim()
        const message = String(req.body?.message ?? '').trim()

        const errors = {}
        if (!name) errors.name = 'Please add your name.'
        else if (name.length >40) errors.name = 'Name must be 40 characters or less'

        if (!message) errors.message = 'Please write a message.'
        else if(message.length > 300) errors.message = 'Message must be 300 characters or less.'

        if(Object.keys(errors).length > 0) {
            return res.status(400).json({ errors })
        }
        const entry = {
            id: randomUUID(),
            name,
            message,
            createdAt: new Date().toISOString(),
        }

        const entries = await readEntries()
        entries.push(entry)
        await writeFile(FILE, JSON.stringify(entries, null, 2))

        res.status(201).json(entry)
    } catch (err) {
        next(err)
    }

})

export default router