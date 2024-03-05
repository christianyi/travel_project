const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: "http://localhost:5173"}))

require('./config/mongoose.config')
require('./routes/story.routes')(app)

app.listen(8000,() =>console.log('The server is running on port 8000'))