const express = require('express')
const router = express.Router()
const pallets = require('../database/controllers/pallets')

router.post('/pallets/create', (req,res) => {
    pallets.create(req.body.tray_id, req.body.storage_id, req.body.weight)
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

router.post('/pallets/findAllByTray', (req,res) => {
    console.log(req.body.tray_id)
    pallets.findAllByTray(req.body.tray_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

})

router.post('/pallets/updateDispatch', (req,res) => {
    pallets.updateDispatch(req.body.id, req.body.dispatch_id, req.body.dispatch_weight, req.body.decrease_weight)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/pallets/update', (req,res) => {
    pallets.update(req.body.id, req.body.max, req.body.storage_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router