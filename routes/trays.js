const express = require('express')
const router = express.Router()
const trays = require('../database/controllers/trays')
const traysMovements = require('../database/controllers/traysMovements')


router.post('/trays/create', (req,res) => {
    trays.create(req.body.name, req.body.weight)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/trays/findAll', (req, res) => {
    trays.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/trays/destroy', (req, res) => {
    trays.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/trays/findOneById', (req, res) => {
    trays.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/trays/findOneByName', (req, res) => {
    trays.findOneByName(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/trays/update', (req, res) => {
    trays.update(req.body.id, req.body.name, req.body.weight)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/trays/updateStock', (req, res) => {
    trays.updateStock(req.body.id, req.body.stock)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})











module.exports = router