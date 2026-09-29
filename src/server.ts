import app from './app'
import { Config } from './config'
import logger from './config/logger'

const exitWithError = (err: unknown) => {
    logger.error(err)
    logger.on('finish', () => process.exit(1))
    logger.end()
}

const startServer = () => {
    const PORT = Number(Config.PORT) || 5501

    try {
        app.listen(PORT, (err) => {
            if (err) {
                exitWithError(err)
                return
            }

            logger.info(`Server is listening on port ${PORT}`)
        })
    } catch (err) {
        exitWithError(err)
    }
}

startServer()
