const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//route getting all users with pagination 
app.get('/users/:pageno/:size', db.getUsers)
//route for getting a friend of a user by id
app.get('/friends/:id', db.getFriend)
//route for getting a friend of friend by id 
app.get('/friends-of-friends/:id', db.getFriendOfFriend)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
