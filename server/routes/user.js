const express = require('express')
const app = express();
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors('*'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))

router.get('/profile/:id', (request, response) => {
  const { id } = request.params

  const query = `select id, firstName, email from testuser where id = ${id}`
  db.query(query, (error, users) => {
    if (error) {
      // when there is an error from MySQL side
      response.send(utils.createError(error))
    } else {
      // user with correct email and password does not exist
      if (users.length == 0) {
        response.send(utils.createError('invalid user name or password'))
      } else {
        response.send(utils.createResult(error, users[0]))
      }
    }
  })
})

router.get('/profile', (request, response) => {
  

  const query = `select id, firstName, email from testuser`
  db.query(query, (error, users) => {
    if (error) {
      // when there is an error from MySQL side
      response.send(utils.createError(error))
    } else {
      // user with correct email and password does not exist
      if (users.length == 0) {
        response.send(utils.createError('invalid user name or password'))
      } else {
        response.send(utils.createResult(error, users))
      }
    }
  })
})

router.post('/signup', (request, response) => {
  const { firstName, email, password } = request.body

  // encrypt the password
  const encryptedPassword = cryptoJs.MD5(password)

  const query = `insert into user (firstName, email, password) 
        values ('${firstName}', '${email}', '${encryptedPassword}')`

  db.query(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.post('/signin', (request, response) => {
  const { email, password } = request.body

  // encrypt the password
  const encryptedPassword = cryptoJs.MD5(password)

  const query = `select id, firstName, email from user where email = '${email}' and password = '${encryptedPassword}'`

  db.query(query, (error, users) => {
    if (error) {
      // when there is an error from MySQL side
      response.send(utils.createError(error))
    } else {
      // user with correct email and password does not exist
      if (users.length == 0) {
        response.send(utils.createError('invalid user name or password'))
      } else {
        response.send(utils.createResult(error, users[0]))
      }
    }
  })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  const query = `delete from user where id = ${id}`
  db.query(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
