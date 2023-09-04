import * as dotenv from 'dotenv'
dotenv.config()
// import config from './config'
import app from './server'

const port = 4444

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
