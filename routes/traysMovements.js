const express = require('express')
const router = express.Router()
const traysMovements = require('../database/controllers/traysMovements')

router.get('/traysMovements/findAll', (req, res) => {
    traysMovements.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/traysMovements/create', (req, res) => {
    traysMovements.create(req.body.tray_id, req.body.producer_id, req.body.reception_id, req.body.quanty, req.body.type, req.body.balance, req.body.description)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/traysMovements/findAllByTrayBetweenDate', (req, res) => {
    traysMovements.findAllByTrayBetweenDate(req.body.tray_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/traysMovements/findLastByTrayBetweenDate', (req, res) => {
    traysMovements.findLastByTrayBetweenDate(req.body.tray_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/traysMovements/findFirstByTrayBetweenDate', (req, res) => {
    traysMovements.findFirstByTrayBetweenDate(req.body.tray_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

})


router.post('/traysMovements/findOneLastByTray', (req, res) => {
    traysMovements.findOneLastByTray(req.body.tray_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/traysMovements/findAllByTrayByProducerBetweenDate', (req, res) => {
    traysMovements.findAllByTrayByProducerBetweenDate(req.body.tray_id, req.body.producer_id, req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})




router.post('/traysMovements/findAllByProducerByTray', (req, res) => {
    traysMovements.findAllByProducerByTray(req.body.tray_id, req.body.producer_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})




module.exports = router