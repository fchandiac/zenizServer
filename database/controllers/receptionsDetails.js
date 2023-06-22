const { ReceptionsDetails, Producers, Receptions, Trays, Pallets, Varieties } = require('../db')
const receptionsDetails = {}

async function create(
    trays_quanty,
    trays_weight,
    impurity,
    kg_impurity,
    gross,
    discount,
    net,
    pay,
    pallet_id,
    tray_id,
    reception_id
) {
    const detail = await ReceptionsDetails.create({
        trays_quanty: trays_quanty,
        trays_weight: trays_weight,
        impurity: impurity,
        kg_impurity: kg_impurity,
        gross: gross,
        discount: discount,
        net: net,
        pay: pay,
        pallet_id: pallet_id,
        tray_id: tray_id,
        reception_id: reception_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return detail
}

async function findOneById(id){
    const detail = await ReceptionsDetails.findOne({
        include: [{model: Receptions, include:[{model:Varieties}, {model:Producers} ]}, {model:Trays}, {model:Pallets}],
        where: {id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return detail
}

async function findAllByReceptionId(reception_id){
    const detail = await ReceptionsDetails.findOne({
        include: [{model: Receptions, include:[{model:Varieties}, {model:Producers} ]}, {model:Trays}, {model:Pallets}],
        where: {reception_id: reception_id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return detail
}

async function findAllByPalletId(pallet_id){
    const detail = await ReceptionsDetails.findOne({
        include: [{model: Receptions, include:[{model:Varieties}, {model:Producers} ]}, {model:Trays}, {model:Pallets}],
        where: {pallet_id: pallet_id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return detail
}


receptionsDetails.create = create
receptionsDetails.findAllByReceptionId = findAllByReceptionId
receptionsDetails.findOneById = findOneById
receptionsDetails.findAllByPalletId = findAllByPalletId

module.exports = receptionsDetails