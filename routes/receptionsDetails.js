const express = require('express')
const router = express.Router()
const receptionsDetails = require('../database/controllers/receptionsDetails')


router.post('/receptionsDetails/create', (req, res) => {
    receptionsDetails.create(
        req.body.trays_quanty,
        req.body.trays_weight,
        req.body.impurity,
        req.body.kg_impurity,
        req.body.gross,
        req.body.discount,
        req.body.net,
        req.body.pay,
        req.body.pallet_id,
        req.body.tray_id,
        req.body.reception_id
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/receptionsDetails/findOneById', (req, res) => {
    receptionsDetails.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/receptionsDetails/findOneByReceptionId', (req, res) => {
    receptionsDetails.findAllByReceptionId(req.body.reception_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/receptionsDetails/findAllByPalletId', (req, res) => {
    receptionsDetails.findAllByReceptionId(req.body.pallet_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router

