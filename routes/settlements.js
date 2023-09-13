const express = require('express')
const router = express.Router()
const settlements = require('../database/controllers/settlements')


router.post('/settlements/create', (req, res) => {
    settlements.create(
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



router.post('/settlements/findAllBetweenDates', (req, res) => {
    settlements.findAllBetweenDates(
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


module.exports = router
