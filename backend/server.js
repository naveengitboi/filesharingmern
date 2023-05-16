import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { uploadImg } from './controller/imageController.js'

const app = express()
app.use(cors())


app.use('/', uploadImg)
const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

