const express = require('express')
const router = express.Router()
const varietyFruits = require('../database/controllers/varieties')


router.post('/varietyFruits/create', (req, res) => {
    varietyFruits.create(req.body.name, req.body.price)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/varietyFruits/findOneByName', (req, res) => {
    varietyFruits.findOneByName(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/varietyFruits/findAll', (req,res) => {
    varietyFruits.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router