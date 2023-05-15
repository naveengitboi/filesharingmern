import express from 'express'
import dotenv from 'dotenv'
dotenv.config()


app = express()


const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

