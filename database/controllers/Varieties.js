const {Varieties} = require('../db')
const varieties = {}

async function create(name, clp, usd, money){
    const variety = await Varieties.create({
        name:name,
        clp:clp,
        usd:usd,
        money:money
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return variety
}

async function findOneByName(name){
    const variety = await Varieties.findOne({
        where:{name:name}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return variety
}

async function findAll(){
    const variety = await Varieties.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return variety
}

async function update(id, name, clp, usd, money){
    const variety = await Varieties.update({
        name:name,
        clp:clp,
        usd:usd,
        money:money
    },{
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    console.log('UpdateVariety',variety)
    return variety
}



varieties.create = create
varieties.findOneByName = findOneByName
varieties.findAll = findAll
varieties.update = update

module.exports = varieties