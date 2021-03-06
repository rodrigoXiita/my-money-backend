const port = process.env.PORT ? process.env.PORT : 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowedCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowedCors)
server.use(queryParser())
server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}`)
})


module.exports = server
