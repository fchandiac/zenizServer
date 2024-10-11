const {CustomerAdvances} = require('../db');
const customerAdvances= {}




async function create(customer_id_id, amount, description){
    const customerAdvance = await CustomerAdvances.create({
        customer_id_id: customer_id_id,
        amount: amount,
        description: description
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAdvance
}

async function findAll(){
    const customerAdvance = await CustomerAdvances.findAll().then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAdvance
}

async function findOneById(id){
    const customerAdvance = await CustomerAdvances.findOne({where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return customerAdvance
}

customerAdvances.findAll = findAll
customerAdvances.findOneById = findOneById
customerAdvances.create = create


module.exports = customerAdvances