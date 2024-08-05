import express from 'express'
import appRoutes from './routes/app.routes.js'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error.middleware.js'
import { PORT } from './config/env.config.js'
import { sequelize } from './database/models/index.js'
import { configureCloudinary } from './config/cloudinary.config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

configureCloudinary()

//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/api', appRoutes)

app.get('/', (req, res) => {
    res.send('Justina api running')
})

app.use(errorMiddleware)

sequelize.authenticate()

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))