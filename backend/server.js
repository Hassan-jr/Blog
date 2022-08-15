const path = require('path');
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
app.use (express.json())
app.use(cors())
app.use (express.urlencoded({extended: true}))
const port =   process.env.PORT || 4000


app.listen (process.env.PORT || 443 , ()=>{
    console.log('listening on port');
})