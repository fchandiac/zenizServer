const express = require('express')
const router = express.Router()
const customerAccounts = require('../database/controllers/customerAccounts')



router.post('/customerAccounts/create', (req, res) => {
    customerAccounts.create(
        req.body.customer_id,
        req.body.credit,
        req.body.debit,
        req.body.balance,
        req.body.reference_id,
        req.body.reference_type,
        req.body.description

    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})



router.post('/customerAccounts/findLastByCustomerId', (req, res) => {
    customerAccounts.findLastByCustomerId(req.body.customer_id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/customerAccounts/findAll', (req, res) => {
    customerAccounts.findAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})





module.exports = router