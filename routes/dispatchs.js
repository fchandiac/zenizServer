const express = require('express')
const router = express.Router()
const dispatchs = require('../database/controllers/dispatchs')

router.post('/dispatchs/create', (req, res) => {
    dispatchs.create(
        req.body.customer_id,
        req.body.guide,
        req.body.clp,
        req.body.usd,
        req.body.change,
        req.body.money,
        req.body.pallets_quanty,
        req.body.pallets_weight,
        req.body.impurity_weight,
        req.body.gross,
        req.body.net,
        req.body.to_pay,
        req.body.open,
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/dispatchs/findAll', (req, res) => {
    dispatchs.findAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/dispatchs/findAllBetweenDate', (req, res) => {
    dispatchs.findAllBetweenDate(req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/dispatchs/updateClose', (req, res) => {
    dispatchs.updateClose(req.body.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


router.post('/dispatchs/findOneById', (req, res) => {
    dispatchs.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})



router.post('/dispatchs/update', (req, res) => {
    dispatchs.update(
        req.body.id,
        req.body.clp,
        req.body.usd,
        req.body.change,
        req.body.money,
        req.body.impurity_weight,
        req.body.to_pay
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router