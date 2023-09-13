const express = require('express')
const router = express.Router()
const advances = require('../database/controllers/advances')

router.post('/advances/create', (req, res) => {
    advances.create(
        req.body.producer_id,
        req.body.amount,
        req.body.description
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})



router.post('/advances/findAllBetweenDates', (req, res) => {
    advances.findAllBetweenDates(
        req.body.start,
        req.body.end
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/advances/findOneById', (req, res) => {
    advances.findOneById(
        req.body.id
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})



module.exports = router
