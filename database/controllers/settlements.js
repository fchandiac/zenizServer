const {Settlements, Producers, Receptions, Packs, Varieties, Types} = require('../db')
const settlements = {}
const sequelize = require('sequelize')
moment = require('moment')

async function create(producer_id, amount, description){
    const advance = await Settlements.create({
        producer_id: producer_id,
        amount: amount,
        description: description
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findAll(){
    const advance = await Settlements.findAll().then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findOneById(id){
    const advance = await Settlements.findOne({
        include:[
            {model: Producers},
            {model: Receptions, include: [{model: Packs}, {model: Varieties}, {model: Types}]}
        ],
        where:{id:id}
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}   

async function findAllByProducerId(producer_id){
    const advance = await Settlements.findAll({
        where:{producer_id:producer_id},
        order: [
            ['created_at', 'DESC']
        ]
    }).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}   

async function update(id, producer_id, amount, description){
    const advance = await Settlements.update({
        producer_id: producer_id,
        amount: amount,
        description: description
    }, {where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function destroy(id){
    const advance = await Settlements.destroy({where:{id:id}}).then(data => {return {'code':1, 'data':data}}).catch(err => {return {'code':0, 'data':err}})
    return advance
}

async function findAllBetweenDates(start, end){
    const advance = await Settlements.findAll({
        include:[
            {model: Producers},
            {model: Receptions, include: [{model: Packs}, {model: Varieties}, {model: Types}]}
        ],
        where: {createdAt: {[sequelize.Op.between]: [start, end]}}
    }).then(data => {
        return {'code':1, 'data':data}
    }).catch(err => {
        return {'code':0, 'data':err}
    })
    return advance
}

settlements.create = create
settlements.findAll = findAll
settlements.findOneById = findOneById
settlements.update = update
settlements.destroy = destroy
settlements.findAllByProducerId = findAllByProducerId
settlements.findAllBetweenDates = findAllBetweenDates

module.exports = settlements
