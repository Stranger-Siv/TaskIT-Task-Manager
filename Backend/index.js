import express from 'express'
import dotenv from 'dotenv'
import connectDB from './dbConnection.js';
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors';  

dotenv.config()

const app = express()

const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());  
app.use('/api/task', taskRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
