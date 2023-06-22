const express = require('express')
const router = express.Router()
const receptions = require('../database/controllers/receptions')


router.post('/receptions/create', (req,res) => {
    receptions.create(
        req.body.guide,
        req.body.price,
        req.body.trays_quanty,
        req.body.trays_weight,
        req.body.gross,
        req.body.discount,
        req.body.net,
        req.body.producer_id,
        req.body.variety_id,
        req.body.type_id
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/receptions/findOneById', (req, res) => {
    receptions.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router