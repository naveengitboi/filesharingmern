import express from 'express'
import uploadImg from './controller/imageController.js'
const router = express.Router()

router.post('/upload', uploadImg)

export default router