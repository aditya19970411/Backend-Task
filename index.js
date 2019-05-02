const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

//app.use(bodyParser.json())
//app.use(
//  bodyParser.urlencoded({
  //  extended: true,
  //})
//)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//route getting all users with pagination 
app.get('/users/:pageno/:size', db.getUsers)
//route for getting a friend of a user by id
app.get('/users/:id', db.getFriend)
//route for getting a friend of friend by id 
app.get('/friend/:id', db.getFriendOfFriend)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
