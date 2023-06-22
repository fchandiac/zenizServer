const express = require('express')
const router = express.Router()
const types = require('../database/controllers/types')

router.post('/typeFruits/create', (req,res) => {
    types.create(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/typeFruits/findOneByName', (req, res) => {
    types.findOneByName(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/typeFruits/findAll', (req, res) => {
    types.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router