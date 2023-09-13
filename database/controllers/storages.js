const {Storages} = require('../db')
const storages = {}


async function create(name){
    const storage = await Storages.create({name:name}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function findAll(){
    const storage = await Storages.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function update(id, name){
    const storage = await Storages.update({name:name}, {where: {id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

storages.create = create
storages.findAll = findAll
storages.update = update

module.exports = storages