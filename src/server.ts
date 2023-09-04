import express from 'express'
import router from "./router"
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req,res) => {
    res.json({message: "hello"})
})

app.use('/api', router)
export default app
