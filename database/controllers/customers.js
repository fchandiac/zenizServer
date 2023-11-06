const { Customers, CustomerAccounts } = require('../db')
const customers = {}

async function create(rut, name, phone, mail, address) {
    const customer = await Customers.create({
        rut: rut,
        name: name,
        phone: phone,
        mail: mail,
        address: address
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findAll() {
    const customer = await Customers.findAll({
        // include: [{ model: CustomerAccounts}]
    })
        .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findOneById(id) {
    const customer = await Customers.findOne({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findOneByName(name) {
    const customer = await Customers.findOne({
        where: { name: name }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function destroy(id){
    const customer = await Customers.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function update(id, rut, name, phone, mail, address ){
    const customer = await Customers.update({
        rut:rut, name:name, phone:phone, mail:mail, address:address
    }, {where:{id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

customers.create = create
customers.findAll = findAll
customers.findOneById = findOneById
customers.destroy = destroy
customers.update = update
customers.findOneByName = findOneByName

module.exports = customers