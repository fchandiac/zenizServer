const { TraysMovements, Trays, Producers } = require('../db')
const traysMovements = {}
const sequelize = require('sequelize')

async function create(tray_id, producer_id, reception_id, quanty, type, balance, description) {
    const mov = await TraysMovements.create({
        tray_id: tray_id,
        producer_id: producer_id,
        reception_id: reception_id,
        quanty: quanty,
        type: type,
        balance: balance,
        description: description
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mov
}

async function findAll() {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}

async function findAllByTrayBetweenDate(tray_id, start, end) {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        where: {
            tray_id: tray_id,
            created_at: { [sequelize.Op.between]: [start, end] }
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}

async function findLastByTrayBetweenDate(tray_id, start, end) {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        where: {
            tray_id: tray_id,
            created_at: { [sequelize.Op.between]: [start, end] }
        },
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}

async function findFirstByTrayBetweenDate(tray_id, start, end) {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        where: {
            tray_id: tray_id,
            created_at: { [sequelize.Op.between]: [start, end] }
        },
        order: [
            ['created_at', 'ASC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}

async function  findOneLastByTray(tray_id){
    const mov = await TraysMovements.findOne({
        where: {
            tray_id: tray_id,
        },
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    

    return mov
}

async function findAllByTrayByProducerBetweenDate(tray_id, producer_id, start, end) {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        where: {
            tray_id: tray_id,
            producer_id: producer_id,
            created_at: { [sequelize.Op.between]: [start, end] }
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}

async function findAllByProducerByTray(tray_id, producer_id) {
    const mov = await TraysMovements.findAll({
        include: [Producers, Trays],
        where: {
            tray_id: tray_id,
            producer_id: producer_id,
    
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => {
        console.error(err)
        return { 'code': 0, 'data': err }
    })
    return mov
}








traysMovements.create = create
traysMovements.findAll = findAll
traysMovements.findAllByTrayBetweenDate = findAllByTrayBetweenDate
traysMovements.findLastByTrayBetweenDate = findLastByTrayBetweenDate
traysMovements.findFirstByTrayBetweenDate = findFirstByTrayBetweenDate
traysMovements.findOneLastByTray = findOneLastByTray
traysMovements.findAllByTrayByProducerBetweenDate = findAllByTrayByProducerBetweenDate
traysMovements.findAllByProducerByTray = findAllByProducerByTray


module.exports = traysMovements