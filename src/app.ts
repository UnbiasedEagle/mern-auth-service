import express from 'express'
import logger from './config/logger'
import { HttpError } from 'http-errors'
import { Request, Response, NextFunction } from 'express'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    res.status(200).send('Welcome to auth service')
})

app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err)

    const status = err.status || 500
    res.status(status).json({
        errors: [
            {
                type: err.name,
                message: err.expose ? err.message : 'Internal server error',
                path: '',
                location: '',
            },
        ],
    })
})

export default app
