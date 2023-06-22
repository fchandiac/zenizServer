const { Receptions, Producers } = require('../db')
const receptions = {}

async function create(
    guide,
    price,
    trays_quanty,
    trays_weight,
    gross,
    discount,
    net,
    producer_id,
    variety_id,
    type_id
) {
    const reception = await Receptions.create({
        guide: guide,
        price: price,
        trays_quanty: trays_quanty,
        trays_weight: trays_weight,
        gross: gross,
        discount: discount,
        net: net,
        producer_id: producer_id,
        variety_id: variety_id,
        type_id: type_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAll() {
    const reception = await Receptions.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function update(id, guide, price, trays_quanty, trays_weight, gross, discount, net, producer_id, variety_id, type_id) {
    const reception = await Receptions.update({
        guide: guide,
        price: price,
        trays_quanty: trays_quanty,
        trays_weight: trays_weight,
        gross: gross,
        discount: discount,
        net: net,
        producer_id: producer_id,
        variety_id: variety_id,
        type_id: type_id
    }, {where: {id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function destroy(id){
    const reception = await Receptions.destroy({where:{id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findOneById(id){
    const reception = await Receptions.findOne({
        include: [ {model:Producers} ],
        where:{id: id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}



receptions.create = create
receptions.findAll = findAll
receptions.update = update
receptions.destroy = destroy
receptions.findOneById = findOneById

module.exports = receptions