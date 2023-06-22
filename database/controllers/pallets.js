const { Pallets, Varieties, Trays, Storages, ReceptionsDetails } = require('../db')
const pallets = {}


async function create(variety_id, tray_id, storage_id, weight){
    const pallet = await Pallets.create({
        trays: 0,
        max: 240 ,
        variety_id: variety_id,
        tray_id: tray_id,
        storage_id: storage_id,
        weight
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findOneById(id){
    const pallet = await Pallets.findOne({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findAll(){
    const pallet = await Pallets.findAll({
        include: [{model: Varieties}, {model: Trays},{model: Storages},{model: ReceptionsDetails} ],
        order: [
            ['updated_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findAllByVariety(variety_id){
    const pallet = await Pallets.findAll({
        include: [{model: Varieties}, {model: Trays}, {model: Storages}],
        where: {variety_id: variety_id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function updateTrays(id, trays){
    const pallet = await Pallets.update({
        trays: trays
    }, {where: {id:id}})
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function updateMax(id, max){
    const pallet = await Pallets.update({
        max:max
    }, {where: {id:id}})
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

pallets.create = create
pallets.findAllByVariety = findAllByVariety
pallets.updateTrays = updateTrays
pallets.findAll = findAll
pallets.findOneById = findOneById
pallets.updateMax = updateMax

module.exports = pallets