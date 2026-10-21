import express from 'express'
import cors from 'cors'
import { projects } from './data/project.js'
import { music } from './data/music.js'
import { posts } from './data/posts.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

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

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
})