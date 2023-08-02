const connectToMongo = require('./db')
const cors=require('cors')
const express = require('express')
const router=express.Router()
connectToMongo()
const app = express()
const port = 4000

app.use(express.json())
// app.use(cors)
app.use(cors({
    origin: 'http://localhost:3000',
  }));

 app.use('/api/auth', require('./routes/auth'))
 app.use('/api/notes', require('./routes/notes'))

app.listen(port,() =>{
    console.log(`Example app listening to localhost: ${port}`)  
})

