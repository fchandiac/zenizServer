const express = require('express')
const router = express.Router()
const receptions = require('../database/controllers/receptions')


router.post('/receptions/create', (req, res) => {
    receptions.create(
        req.body.producer_id,
        req.body.variety_id,
        req.body.type_id,
        req.body.guide,
        req.body.clp,
        req.body.usd,
        req.body.change,
        req.body.money,
        req.body.trays_quanty,
        req.body.trays_weight,
        req.body.gross,
        req.body.net,
        req.body.impurity_weight,
        req.body.to_pay
        )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})


router.get('/receptions/findAll', (req, res) => {
    receptions.findAll()
        .then(data => {
            res.json(data)
        }
        ).catch(err => {
            res.json(err)
        })
})

router.post('/receptions/update', (req, res) => {
    receptions.update(
        req.body.id,
        req.body.clp,
        req.body.usd,
        req.body.change,
        req.body.money,
        req.body.variety,
        req.body.type,
        req.body.to_pay,
        req.body.impurity_weight,
        req.body.net
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})


router.post('/receptions/updateOpen', (req, res) => {
    receptions.updateOpen(
        req.body.id,
        req.body.open
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/receptions/findAllBetweenDates', (req, res) => {
    receptions.findAllBetweenDates(
        req.body.start,
        req.body.end
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})


router.post('/receptions/findAllByProducerBetweenDates', (req, res) => {
    receptions.findAllByProducerBetweenDates(
        req.body.producer_id,
        req.body.start,
        req.body.end
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})



router.post('/receptions/updateSettlement', (req, res) => {
    receptions.updateSettlement(
        req.body.id,
        req.body.settlement_id
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})



router.post('/receptions/findOneById', (req, res) => {
    receptions.findOneById(
        req.body.id
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})



router.post('/receptions/destroy', (req, res) => {
    receptions.destroy(
        req.body.id
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})



module.exports = router