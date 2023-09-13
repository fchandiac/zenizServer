const express = require('express')
const router = express.Router()
const varietyFruits = require('../database/controllers/varieties')


router.post('/varieties/create', (req, res) => {
    varietyFruits.create(
        req.body.name,
        req.body.clp, 
        req.body.usd,
        req.body.money
        )
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

router.get('/varieties/findAll', (req,res) => {
    varietyFruits.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/varieties/update', (req, res) => {
    varietyFruits.update(
        req.body.id, 
        req.body.name,
        req.body.clp, 
        req.body.usd,
        req.body.money
        )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router