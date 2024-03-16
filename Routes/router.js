const express = require('express')

const userController = require('../Controllers/userController')
const taskController = require('../Controllers/taskController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')


const router = new express.Router()

router.post('/register',userController.register)

router.post('/login',userController.login)

router.post('/task/add',jwtMiddleware,taskController.addUserTask)


module.exports = router