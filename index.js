import dotenv from 'dotenv'
import express from 'express'
dotenv.config()


import initCronJobs from './cron/index.js';
import {initDatabase} from './database/index.js';
import router from './routes/index.js';


const app = express();

app.use(express.urlencoded())
app.use(express.json())
app.get('/health',(req,res)=>{
    return res.send("OK...")
})

initDatabase().then((db)=>{

    initCronJobs(db)
    app.use(router)
    app.listen(process.env.PORT || 8000)
})


