const express=require('express')
const ConnectDB = require('./Connections/connection')
const app=express()

ConnectDB()
const PORT=process.env.PORT || 8000




app.listen(PORT,()=>console.log(`Server running at ${PORT}`))