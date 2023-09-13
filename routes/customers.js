const express = require('express')
const router = express.Router()
const customers = require('../database/controllers/customers')

router.post('/customers/create', (req,res) => {
    customers.create(
        req.body.rut,
        req.body.name,
        req.body.address,
        req.body.phone,
        req.body.email,
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/customers/findAll', (req, res) => {
    customers.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router