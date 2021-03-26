import express from 'express'
import asyncHandler from 'express-async-handler'
import starships from '../data/starships.js'

const router = express.Router()

router.get('/', (req,res) => {
    res.send(starships)
})

export default router