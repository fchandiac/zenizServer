const { ProducerAccounts } = require('../db')
const producerAccounts = {}
const sequelize = require('sequelize')

async function create(producer_id, credit, debit, balance, reference_id, reference_type, description) {
    const producerAccount = await ProducerAccounts.create({
        producer_id: producer_id,
        credit: credit,
        debit: debit,
        balance: balance,
        reference_id: reference_id,
        reference_type: reference_type,
        description: description
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function findAll() {
    const producerAccount = await ProducerAccounts.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function findOneById(id) {
    const producerAccount = await ProducerAccounts.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function findAllByProducerId(producer_id) {
    const producerAccount = await ProducerAccounts.findAll({
        where: { producer_id: producer_id },
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}


async function update(id, producer_id, credit, debit, balance, reference_id, reference_type, description) {
    const producerAccount = await ProducerAccounts.update({
        producer_id: producer_id,
        credit: credit,
        debit: debit,
        balance: balance,
        reference_id: reference_id,
        reference_type: reference_type,
        description: description
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function destroy(id) {
    const producerAccount = await producerAccounts.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function findLastByProducerId(producer_id) {
    const producerAccount = await ProducerAccounts.findOne({
        where: { producer_id: producer_id },
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}
async function findAllByProducerIdBetweenDates(producer_id, start, end) {
    const producerAccount = await ProducerAccounts.findAll({
        where: { producer_id: producer_id, createdAt: {[sequelize.Op.between]: [start, end]}  },
        order: [
            ['created_at', 'Desc']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

async function findLastByProducerIdBetweenDates(producer_id, start, end) {
    const producerAccount = await ProducerAccounts.findOne({
        where: { producer_id: producer_id, createdAt: {[sequelize.Op.between]: [start, end]}  },
        order: [
            ['created_at', 'Desc']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
    
}

async function findFirstByProducerIdBetweenDate(producer_id, start, end) {
    const producerAccount = await ProducerAccounts.findOne({
        where: { producer_id: producer_id, createdAt: {[sequelize.Op.between]: [start, end]}  },
        order: [
            ['created_at', 'ASC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return producerAccount
}

producerAccounts.create = create
producerAccounts.findAll = findAll
producerAccounts.findOneById = findOneById
producerAccounts.update = update
producerAccounts.destroy = destroy
producerAccounts.findAllByProducerId = findAllByProducerId
producerAccounts.findLastByProducerId = findLastByProducerId
producerAccounts.findAllByProducerIdBetweenDate= findAllByProducerIdBetweenDates
producerAccounts.findLastByProducerIdBetweenDates = findLastByProducerIdBetweenDates
producerAccounts.findFirstByProducerIdBetweenDate = findFirstByProducerIdBetweenDate

module.exports = producerAccounts