import express from 'express'
import cors from 'cors'
import { projects } from './data/project.js'
import { music } from './data/music.js'
import { posts } from './data/posts.js'
import guestbookRouter from './routes/guestbook.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json({limit: '10kb'}))

app.use('/api/guestbook', guestbookRouter)

app.get('/api/music', (req, res) => {
    res.json(music)
})
app.get('/api/posts', (req, res) => {
    res.json(posts)
})
app.get('/api/projects', (req, res) => {
    res.json(projects)
})
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' })
})

app.get('/favicon.ico', (req, res) => res.status(204).end())
app.get('/.well-known/*splat',(req, res) => res.status(204).end())

app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status ?? 500).json({error: 'Something went wrong.'})
})

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
})