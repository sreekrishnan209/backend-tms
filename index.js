require('dotenv').config()

const express = require('express')

const cors = require('cors')
 const router = require('./Routes/router')

 const db=require('./DB/connection')

 const appMiddleware = require('./Middlewares/appMiddleware')

const tmServer = express()

tmServer.use(cors())
tmServer.use(express.json())
tmServer.use(appMiddleware)
tmServer.use(router)

const port = 4000 || process.env.port

tmServer.listen(port,()=>{
    console.log("listening on port"+port);
})

tmServer.get('/',(req,res)=>{
    res.send(`<h1>task management app started</h1>`)
})