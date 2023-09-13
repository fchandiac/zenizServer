const { Dispatchs, Pallets, Customers } = require('../db.js')
const dispatchs = {}
const sequelize = require('sequelize')

async function create(
    customer_id,
    guide,
    clp,
    usd,
    change,
    money,
    trays_quanty,
    trays_weight,
    impurity_weight,
    gross,
    net,
    to_pay,
    open,
) {
    const dispatch = await Dispatchs.create({
        customer_id: customer_id,
        guide: guide,
        clp: clp,
        usd: usd,
        change: change,
        money: money,
        trays_quanty: trays_quanty,
        trays_weight: trays_weight,
        impurity_weight: impurity_weight,
        gross: gross,
        net: net,
        to_pay: to_pay,
        open: open,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return dispatch
}

async function findAll() {
    const dispatch = await Dispatchs.findAll({
        include: [{ model: Pallets }, { model: Customers }]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return dispatch
}

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


dispatchs.create = create
dispatchs.findAll = findAll
dispatchs.findAllBetweenDate = findAllBetweenDate

module.exports = dispatchs