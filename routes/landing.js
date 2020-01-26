const express = require('express')
const router = express.Router()
const Users = require('../public/models/userModel')

router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get('/allUsers', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

module.exports = router