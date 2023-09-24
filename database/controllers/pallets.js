const { Pallets, Trays, Storages, Packs, Receptions, Producers, Varieties } = require('../db')
const pallets = {}


async function create(tray_id, storage_id, weight){
    const pallet = await Pallets.create({
        trays: 0,
        max: 240 ,
        tray_id: tray_id,
        storage_id: storage_id,
        weight
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findOneById(id){
    const pallet = await Pallets.findOne({
        include: [{model: Trays},{model: Storages},{model: Packs, include: [{model: Trays},{ model: Receptions, include: [{model: Producers}, {model: Varieties}] }]} ],
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findAll(){
    const pallet = await Pallets.findAll({
        include: [{model: Trays},{model: Storages},{model: Packs, include: [{model: Trays},{ model: Receptions, include: [{model: Producers}] }]} ],
        order: [
            ['updated_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function findAllByTray(tray_id){
    const pallet = await Pallets.findAll({
        // include: [{model: Trays}, {model: Storages}],
        where: {tray_id: tray_id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function updateTrays(id, trays){
    const findPallet = await Pallets.findOne({
        where: {id:id}
    })
    const pallet = await Pallets.update({
        trays: trays + findPallet.trays
    }, {where: {id:id}})
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function updateDispatch(id, dispatch_id, dispatch_weight, decrease_weight){
    const pallet = await Pallets.update({
        dispatch_id: dispatch_id,
        dispatch: true,
        dispatch_weight: dispatch_weight,
        decrease_weight: decrease_weight
        
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

async function update (id, max, storage_id){
    const pallet = await Pallets.update({
        max:max,
        storage_id: storage_id
    }, {where: {id:id}})
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

async function destroy(id){
    const pallet = await Pallets.destroy({
        where: {id:id}
    })
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return pallet
}

pallets.create = create
pallets.updateTrays = updateTrays
pallets.findAll = findAll
pallets.findOneById = findOneById
pallets.updateMax = updateMax
pallets.findAllByTray = findAllByTray
pallets.updateDispatch = updateDispatch
pallets.update = update
pallets.destroy = destroy

module.exports = pallets