import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors';

dotenv.config()
connectDB()

const app = express()
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/movies', movieRoutes)
app.use('/api/users', userRoutes);



//Middleware
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)