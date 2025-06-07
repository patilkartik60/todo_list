const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path')

const connectDB = require('./server/db/dbConfig');

const app = express()
const port = process.env.PORT || 3000
const TodoRoute = require('./server/routes/todo')

connectDB()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Serve static files
app.use(express.static('.'))

// API routes - match what your frontend expects
app.use('/api/todoList', TodoRoute)

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running successfully' })
})

// For Vercel, export the app
module.exports = app

// Only listen if not in Vercel environment
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}