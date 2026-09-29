import app from './app'
import { Config } from './config'
import logger from './config/logger'

const startServer = () => {
    const PORT = Number(Config.PORT) || 5501

    try {
        app.listen(PORT, (err) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }

            logger.info(`Server is listening on port ${PORT}`)
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()
