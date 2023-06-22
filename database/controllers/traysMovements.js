const {TraysMovements, Trays, Producers} = require('../db')
const traysMovements = {}


async function create(quanty, type, producer_id, tray_id, stock_balance){
    const mov = await TraysMovements.create({
        quanty: quanty,
        type: type,
        producer_id: producer_id,
        tray_id: tray_id,
        stock_balance
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mov
}

async function findAll(){
    const mov = await TraysMovements.findAll({
        include:[Producers, Trays],
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { 
        console.error(err)
        return { 'code': 0, 'data': err } 
    })
    return mov
}


traysMovements.create = create
traysMovements.findAll = findAll

module.exports = traysMovements