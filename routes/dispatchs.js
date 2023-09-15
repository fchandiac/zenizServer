const express = require('express')
const router = express.Router()
const dispatchs = require('../database/controllers/dispatchs')

router.post('/dispatchs/create', (req, res) => {
    dispatchs.create(
        req.body.customer_id,
        req.body.guide,
        req.body.clp,
        req.body.usd,
        req.body.change,
        req.body.money,
        req.body.trays_quanty,
        req.body.trays_weight,
        req.body.impurity_weight,
        req.body.gross,
        req.body.net,
        req.body.to_pay,
        req.body.open,
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/dispatchs/findAll', (req, res) => {
    dispatchs.findAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

async function findAllBetweenDate(start, end) {
    const dispatch = await Dispatchs.findAll({
        include: [{ model: Pallets }, { model: Customers }],
        where: {
            created_at: { [sequelize.Op.between]: [start, end] }
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return dispatch
}

router.post('/dispatchs/findAllBetweenDate', (req, res) => {
    dispatchs.findAllBetweenDate(req.body.start, req.body.end)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/dispatchs/updateClose', (req, res) => {
    dispatchs.updateClose(req.body.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router