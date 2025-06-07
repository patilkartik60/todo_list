const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const connectDB = require('./db/dbConfig');


const app = express()
const port = 3000
const TodoRoute = require('./routes/todo')

connectDB()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
//app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server is running succesfully')
})

app.use('/api/todoList', TodoRoute)

// app.get('/getTodoList', (req, res) => {
//   res.send([{"task":"Setting up database","priority":"High","date":"01/01/1900"},{"task":"Clean room","priority":"High","date":"01/01/2000"}])
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



