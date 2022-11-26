var express = require('express')
var server = express()

// var path = require('path')

var PORT = 3000

server.use(express.static('./'))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})