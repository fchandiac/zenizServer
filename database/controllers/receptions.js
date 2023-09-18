const { Receptions, Producers, Varieties, Types, Packs, Trays, TraysMovements } = require('../db')
const receptions = {}
const sequelize = require('sequelize')
moment = require('moment')

async function create(
    producer_id,
    variety_id,
    type_id,
    guide,
    clp,
    usd,
    change,
    money,
    trays_quanty,
    trays_weight,
    gross,
    net,
    impurity_weight,
    to_pay
) {
    const reception = await Receptions.create({
        producer_id: producer_id,
        variety_id: variety_id,
        type_id: type_id,
        guide: guide,
        clp: clp,
        usd: usd,
        change: change,
        money: money,
        trays_quanty: trays_quanty,
        trays_weight: trays_weight,
        gross: gross,
        net: net,
        impurity_weight: impurity_weight,
        to_pay: to_pay
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAll() {
    const reception = await Receptions.findAll({
        include: [{ model: Producers }, { model: Varieties }, { model: Types }, { model: Packs }]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAllByProducerBetweenDates(producer_id, start, end) {
    const reception = await Receptions.findAll({
        include: [{ model: Producers }, { model: Varieties }, { model: Types }, { model: Packs }],
        where: {
            producer_id: producer_id,
            createdAt: { [sequelize.Op.between]: [start, end] }
        }
    }).then(data => {
        return { 'code': 1, 'data': data }
    }).catch(err => {
        return { 'code': 0, 'data': err }
    })
    return reception
}

async function update(
    id,
    clp,
    usd,
    change,
    money,
    variety,
    type,
    to_pay,
    impurity_weight,
    net
) {
    const reception = await Receptions.update({
        id : id,
        clp: clp,
        usd: usd,
        change: change,
        money: money,
        variety: variety,
        type: type,
        to_pay: to_pay,
        impurity_weight: impurity_weight,
        net
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function destroy(id) {
    const reception = await Receptions.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findOneById(id) {
    const reception = await Receptions.findOne({
        include: [{ model: Producers },{model: TraysMovements }, { model: Varieties }, { model: Types }, { model: Packs, include: [{ model: Trays }] }],
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function updateOpen(id, open) {
    const reception = await Receptions.update({
        open: open
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAllBetweenDates(start, end) {
    const reception = await Receptions.findAll({
        include: [{ model: Producers }, { model: Varieties }, { model: Types }, { model: Packs }],
        where: {createdAt: {[sequelize.Op.between]: [start, end]}},
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function updateSettlement(id, settlement_id) {
    const reception = await Receptions.update({
        settlement: true,
        settlement_id: settlement_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}



receptions.create = create
receptions.findAll = findAll
receptions.update = update
receptions.updateOpen = updateOpen
receptions.findAllBetweenDates = findAllBetweenDates
receptions.findAllByProducerBetweenDates = findAllByProducerBetweenDates
receptions.updateSettlement = updateSettlement
receptions.findOneById = findOneById
receptions.destroy = destroy

module.exports = receptions