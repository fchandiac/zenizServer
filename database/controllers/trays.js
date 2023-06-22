const {Trays} = require('../db')
const trays = {}

async function create(name, weight){
    const material = await Trays.create({
        name:name, weight:weight, stock:0
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}

async function findAll(){
    const material = await Trays.findAll({
        order: [
            ['created_at', 'ASC'],
        ]
    })
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}



async function destroy(id){
    const material = await Trays.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}

async function update(id, name, weight, stock){
    const material = await Trays.update({
        name: name, weight: weight, stock:stock
    }, {
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}

async function updateStock(id, stock){
    const tray = await Trays.update({
        stock:stock
    }, {where: {id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tray
}

async function findOneById(id){
    const material = await Trays.findOne({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}

async function findOneByName(name){
    const material = await Trays.findOne({
        where:{name:name}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return material
}


trays.create = create
trays.findAll = findAll
trays.destroy = destroy
trays.update = update
trays.findOneById = findOneById
trays.findOneByName = findOneByName
trays.updateStock = updateStock


module.exports = trays
