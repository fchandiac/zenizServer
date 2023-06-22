const express = require('express')
const router = express.Router()
const profiles = require('../database/controllers/profiles')




router.post('/profiles/create', (req, res) => {
    profiles.create(
        req.body.name, 
        req.body.admin
        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/profiles/findall', (req, res) => {
    profiles.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router