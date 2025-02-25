import express from 'express'
import dotenv from 'dotenv'
import connectDB from './dbConnection.js';
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors';  
import axios from 'axios';


dotenv.config()

const app = express()

const PORT = process.env.PORT;
app.use(express.json());

const url = `https://taskit-task-manager-u4cw.onrender.com`;
const interval = 300000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);



app.use(cors());  
app.use('/api/task', taskRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
