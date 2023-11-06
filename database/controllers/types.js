const {Types} = require('../db')
const types = {}

async function create (name){
    const type = await Types.create({
        name:name
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return type
}


async function findOneByName(name){
    const type = await Types.findOne({
        where:{name:name}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return type
}

async function findAll(){
    const type = await Types.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return type
}

types.create = create
types.findOneByName = findOneByName
types.findAll = findAll


module.exports = types