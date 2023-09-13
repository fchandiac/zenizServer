const express = require('express')
const router = express.Router()
const profiles = require('../database/controllers/profiles')



router.post('/profiles/create', (req, res) => {
    profiles.create(
        req.body.name,
        req.body.delete,
        req.body.edit,
        req.body.settlement,
        req.body.new_reception,
        req.body.new_dispatch,
        req.body.close_reception,
        req.body.close_dispatch,
        req.body.advance

        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/profiles/findAll', (req, res) => {
    profiles.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router