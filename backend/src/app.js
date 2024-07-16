import express from 'express'
import appRoutes from './routes/app.routes.js'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error.middleware.js'
import { PORT } from './config/env.config.js'
import { sequelize } from './database/models/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', appRoutes)

app.use(errorMiddleware)

sequelize.authenticate()

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))