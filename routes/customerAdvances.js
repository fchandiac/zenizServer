const express = require('express')
const router = express.Router()
const customerAdvances = require('../database/controllers/customerAdvances')





router.post('/customerAdvances/create', (req, res) => {
    customerAdvances.create(
        req.body.customer_id,
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

router.get('/customerAdvances/findAll', (req, res) => {
    customerAdvances.findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/customerAdvances/findOneById', (req, res) => {
    customerAdvances.findOneById(req.body.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router