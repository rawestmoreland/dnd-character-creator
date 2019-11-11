const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const app = express()

// Built in bodyparser middleware
app.use(express.json())

// DB Config
const db = config.get('mongoURI')

// Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoBD Connected...'))
  .catch(err => console.log(err))

// Use routes
app.use('/api/characters', require('./routes/api/characters'))
//app.use('/api/users', require('./routes/api/users'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on Port ${port}`))
