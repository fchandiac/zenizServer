const { Packs } = require('../db')
const packs = {}


async function create(pallet_id, tray_id, reception_id, quanty, trays_weight, impurity, impurity_weight, gross, net) {
    const pack = await Packs.create({
        pallet_id: pallet_id,
        tray_id: tray_id,
        reception_id: reception_id,
        quanty: quanty,
        trays_weight: trays_weight,
        impurity: impurity,
        impurity_weight: impurity_weight,
        gross: gross,
        net: net
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return pack
}

async function updatePallet(id, pallet_id) {
    const pack = await Packs.update({
        pallet_id: pallet_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return pack
}


async function divide(idA, quantyA, quantyB){

    try{

        const packA = await Packs.findOne({where:{id:idA}})
        const fxA = ((quantyA * 100) / packA.quanty) / 100
        const fxB = ((quantyB * 100) / packA.quanty) / 100
    
        const fxPackA = {
            quanty: packA.quanty * fxA,
            trays_weight: packA.trays_weight * fxA,
            impurity: packA.impurity * fxA,
            impurity_weight: packA.impurity_weight * fxA,
            gross: packA.gross * fxA,
            net: packA.net * fxA
        }
    
        const fxPackB = {
            quanty: packA.quanty * fxB,
            trays_weight: packA.trays_weight * fxB,
            impurity: packA.impurity * fxB,
            impurity_weight: packA.impurity_weight * fxB,
            gross: packA.gross * fxB,
            net: packA.net * fxB
        }
    
        const updatePackA = await Packs.update({
            quanty: fxPackA.quanty,
            trays_weight: fxPackA.trays_weight,
            impurity: fxPackA.impurity,
            impurity_weight: fxPackA.impurity_weight,
            gross: fxPackA.gross,
            net: fxPackA.net
        }, {where:{id:idA}})
    
        const packB = await Packs.create({
            pallet_id: packA.pallet_id,
            tray_id: packA.tray_id,
            reception_id: packA.reception_id,
            quanty: fxPackB.quanty,
            trays_weight: fxPackB.trays_weight,
            impurity: fxPackB.impurity,
            impurity_weight: fxPackB.impurity_weight,
            gross: fxPackB.gross,
            net: fxPackB.net
        })

        return {code:1, data:{packB:packB, packA:updatePackA}}
    

    } catch(err){
        return {code:0, data:err}
    }
}

packs.create = create
packs.updatePallet = updatePallet
packs.divide = divide



module.exports = packs