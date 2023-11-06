const {Advances, Producers} = require('../db')
const advances = {}
const sequelize = require('sequelize')

async function create(producer_id, amount, description){
    const advance = await Advances.create({
        producer_id: producer_id,
        amount: amount,
        description: description
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findAll(){
    const advance = await Advances.findAll().then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findOneById(id){
    const advance = await Advances.findOne({
        include:[{model: Producers}],
        where:{id:id}
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}   

async function findAllByProducerId(producer_id){
    const advance = await Advances.findAll({
        where:{producer_id:producer_id},
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}   

async function update(id, producer_id, amount, description){
    const advance = await Advances.update({
        producer_id: producer_id,
        amount: amount,
        description: description
    }, {where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function destroy(id){
    const advance = await Advances.destroy({where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findAllBetweenDates(start, end){
    const advance = await Advances.findAll({
        include:[
            {model: Producers},
        ],
        where: {createdAt: {[sequelize.Op.between]: [start, end]}}
    }).then(data => {
        return {'code':1, 'data':data}
    }).catch(err => {
        return {'code':0, 'data':err}
    })
    return advance
}

advances.create = create
advances.findAll = findAll
advances.findOneById = findOneById
advances.update = update
advances.destroy = destroy
advances.findAllByProducerId = findAllByProducerId
advances.findAllBetweenDates = findAllBetweenDates
module.exports = advances
