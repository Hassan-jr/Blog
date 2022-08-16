const path = require('path');
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db');

dotenv.config()

connectDB();

const app = express()
app.use (express.json())
app.use(cors())
app.use (express.urlencoded({extended: true}))
const port =   process.env.PORT || 4000



app.use('/post', require('./routes/postRoute'));


app.listen (port, ()=>{
    console.log('listening on port');
})