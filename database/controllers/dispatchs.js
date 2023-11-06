const { Dispatchs, Pallets, Customers, Packs, Trays } = require('../db.js')
const dispatchs = {}
const sequelize = require('sequelize')

async function create(
    customer_id,
    guide,
    clp,
    usd,
    change,
    money,
    pallets_quanty,
    pallets_weight,
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
        pallets_quanty: pallets_quanty,
        pallets_weight: pallets_weight,
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

async function updateClose(id){
    const dispatch = await Dispatchs.update({
        open:0
    }, {where:{id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return dispatch
}

async function findOneById(id){
    const dispatch = await Dispatchs.findOne({
        include: [{model: Pallets, include:[{model: Packs}, {model:Trays}]}, {model: Customers}],
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return dispatch
}

async function update(id, clp, usd, change, money, impurity_weight, to_pay, net, gross ){
    const dispatch = await Dispatchs.update({
        clp: clp,
        usd: usd,
        change: change,
        money: money,
        impurity_weight: impurity_weight,
        to_pay: to_pay,
        net: net,
        gross: gross,
    }, {where:{id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return dispatch

}


dispatchs.create = create
dispatchs.findAll = findAll
dispatchs.findAllBetweenDate = findAllBetweenDate
dispatchs.updateClose = updateClose
dispatchs.findOneById = findOneById
dispatchs.update = update

module.exports = dispatchs