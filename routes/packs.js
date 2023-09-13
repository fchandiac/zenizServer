const express = require('express')
const router = express.Router()
const packs = require('../database/controllers/packs')



router.post('/packs/create', (req,res) => {
    packs.create(
        req.body.pallet_id,
        req.body.tray_id,
        req.body.reception_id,
        req.body.quanty,
        req.body.trays_weight,
        req.body.impurity,
        req.body.impurity_weight,
        req.body.gross,
        req.body.net
        )
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})




router.post('/packs/updatePallet', (req,res) => {
    packs.updatePallet(
        req.body.id,
        req.body.pallet_id
    )   
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/packs/divide', (req,res) => {
    packs.divide(
        req.body.idA,
        req.body.quantyA,
        req.body.quantyB
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router