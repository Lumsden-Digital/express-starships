import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import asyncHandler from 'express-async-handler'
import starshipRoutes from './routes/starshipRoutes.js'
// import starships from './data/starships.js'

dotenv.config()
const app = express()
connectDB()

app.get('/', async (req, res) => {
    res.send(`API running...`)
})

// app.get('/api/starships', (req, res) => {
//     res.send(starships)
// })

app.use('/api/starships', starshipRoutes)

app.listen(5000, () => {
    (console.log(`Server running on port ${process.env.PORT}`.cyan))
})
