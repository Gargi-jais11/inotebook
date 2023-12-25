const connectToMongo=require('./db');
const express = require('express')
const cors=require('cors'); 
const path = require("path");
connectToMongo();
const app = express()
const port = 5000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Gargi!')
})
//Available Routes
app.use(express.static(path.join(__dirname, "build")));
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
