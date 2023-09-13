const express = require('express')
const router = express.Router()
const producerAccounts = require('../database/controllers/producerAccounts')


router.post('/producerAccounts/create', (req, res) => {
    producerAccounts.create( 
        req.body.producer_id,
        req.body.credit,
        req.body.debit,
        req.body.balance,
        req.body.reference_id,
        req.body.reference_type,
        req.body.description
    )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/producerAccounts/findAllByProducerId', (req, res) => {
    producerAccounts.findAllByProducerId(req.body.producer_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/producerAccounts/findLastByProducerId', (req, res) => {
    producerAccounts.findLastByProducerId(req.body.producer_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/producerAccounts/findAllByProducerIdBetweenDates', (req, res) => {
    producerAccounts.findAllByProducerIdBetweenDate(req.body.producer_id, req.body.start, req.body.end)
    .then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
    
})

router.post('/producerAccounts/findLastByProducerIdBetweenDates', (req, res) => {
 
    producerAccounts.findLastByProducerIdBetweenDates(req.body.producer_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/producerAccounts/findFirstByProducerIdBetweenDate', (req, res) => {
    producerAccounts.findFirstByProducerIdBetweenDate(req.body.producer_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})





module.exports = router