require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/add', (req, res) => {
    const data = req.body
    if(!req.headers.referer?.includes('https://kimmykx.github.io/')) return res.status(403).json({ error: '403 Forbiddden' })
    res.json({ success: true })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))