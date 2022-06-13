const express=require('express')
var cors = require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const bookRouter=require('./routes/BookRouter')
app.use(bookRouter)

app.listen(5000,()=>{console.log("server started on port 5000")})