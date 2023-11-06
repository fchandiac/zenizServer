const {CustomerAccounts} = require('../db')
const customerAccounts = {}

async function create(customer_id, credit, debit, balance, reference_id, reference_type, description){
    const customerAccount = await CustomerAccounts.create({
        customer_id: customer_id,
        credit: credit,
        debit: debit,
        balance: balance,
        reference_id: reference_id,
        reference_type: reference_type,
        description: description
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

async function findAll(){
    const customerAccount = await CustomerAccounts.findAll().then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

async function findOneById(id){
    const customerAccount = await CustomerAccounts.findOne({where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

async function findAllByCustomerId(customer_id){
    const customerAccount = await CustomerAccounts.findAll({
        where:{customer_id:customer_id},
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}


async function update(id, customer_id, credit, debit, balance, reference_id, reference_type, description){
    const customerAccount = await CustomerAccounts.update({
        customer_id: customer_id,
        credit: credit,
        debit: debit,
        balance: balance,
        reference_id: reference_id,
        reference_type: reference_type,
        description: description
    }, {where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

async function destroy(id){
    const customerAccount = await CustomerAccounts.destroy({where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

async function findLastByCustomerId(customer_id){
    const customerAccount = await CustomerAccounts.findOne({
        where:{customer_id:customer_id},
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAccount
}

customerAccounts.create = create
customerAccounts.findAll = findAll
customerAccounts.findOneById = findOneById
customerAccounts.update = update
customerAccounts.destroy = destroy
customerAccounts.findAllByCustomerId = findAllByCustomerId
customerAccounts.findLastByCustomerId = findLastByCustomerId

module.exports = customerAccounts