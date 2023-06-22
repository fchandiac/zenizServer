const express = require('express')
const router = express.Router()
const pallets = require('../database/controllers/pallets')

router.post('/pallets/create', (req,res) => {
    pallets.create(req.body.variety_id, req.body.tray_id, req.body.storage_id, req.body.weight)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/pallets/findAllByVariety', (req, res) => {
    pallets.findAllByVariety(req.body.variety_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/pallets/updateTrays', (req,res) => {
    pallets.updateTrays(req.body.id, req.body.trays)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/pallets/findAll', (req, res) => {
    pallets.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/pallets/findOneById', (req,res) => {
    pallets.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/pallets/updateMax', (req,res) => {
    pallets.updateMax(req.body.id, req.body.max)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})
module.exports = router