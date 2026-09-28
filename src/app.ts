import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    res.send('Welcome to auth service')
})

export default app
