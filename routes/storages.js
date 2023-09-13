const express = require('express')
const router = express.Router()
const storages = require('../database/controllers/storages')


router.post('/storages/create', (req, res) => {
    storages.create(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/storages/findAll', (req, res) => {
    storages.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/storages/update', (req, res) => {
    storages.update(req.body.id, req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router