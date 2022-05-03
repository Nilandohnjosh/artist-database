const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getYe()
    // eslint-disable-next-line promise/always-return
    .then((ye) => {
      console.log(ye)
      res.json(ye)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
