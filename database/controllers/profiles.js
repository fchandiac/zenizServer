const { Profiles } = require('../db')
const profiles = {}

// name: { type: Sequelize.STRING },
//                 delete: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 edit: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 settlement: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 new_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 new_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 close_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 close_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 advance: { type: Sequelize.BOOLEAN, defaultValue: false },



async function create(
    name,
    delete_,
    edit,
    settlement,
    new_reception,
    new_dispatch,
    close_reception,
    close_dispatch,
    advance,
    users

    
) {
    const profile = await Profiles.create({
        name: name,
        delete: delete_,
        edit: edit,
        settlement: settlement,
        new_reception: new_reception,
        new_dispatch: new_dispatch,
        close_reception: close_reception,
        close_dispatch: close_dispatch,
        advance: advance,
        users: users
        
        
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findAll(){
    const profile = await Profiles.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}





profiles.create = create
profiles.findAll = findAll



module.exports = profiles



