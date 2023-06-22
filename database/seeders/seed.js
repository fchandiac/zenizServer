'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('profiles', [
      {
        name: 'Administrador',
        admin: true,
        created_at: '2022-08-01 05:45:12'
      }
    ], {})


    await queryInterface.bulkInsert('users', [
      {
        user: 'admin',
        pass: '7890',
        name: 'Felipe Chandía',
        mail: 'felipe.chandia.cast@gmail.com',
        profile_id: 1001,
        created_at: '2022-08-02 05:45:12'
      },
      {
        user: 'user',
        pass: '7890',
        name: 'User Test',
        mail: 'user.test@gmail.com',
        profile_id: 1001,
        created_at: '2022-08-01 05:45:12'
      },
    ], {})

    await queryInterface.bulkInsert('producers', [
      {
        rut: '16.822.404-4',
        name: 'Felipe Productor',
        phone: '90909090',
        mail: 'mail@mail.com',
        address: 'su casa',
        type: 0,
        created_at: '2022-08-01 05:45:12'
      },
      {
        rut: '16.822.404-5',
        name: 'Test Productor',
        phone: '89898989',
        mail: 'producer@mail.com',
        address: '',
        type: 0,
        created_at: '2022-08-02 05:45:12'
      },
      {
        rut: '77.276.497-9',
        name: 'Karmika',
        phone: '89898989',
        mail: 'karmika@mail.com',
        address: 'Parral',
        type: 1,
        created_at: '2022-08-02 05:45:12'
      }
    ], {})

    await queryInterface.bulkInsert('varieties', [
      {
        name: 'Arándano',
        price: 1200,
      },
      {
        name: 'Frambuesa',
        price: 900,
      }
    ], {})

    await queryInterface.bulkInsert('types', [
      {
        name: 'IQF',
      },
      {
        name: 'Congelada',
      }
    ], {})

    await queryInterface.bulkInsert('trays', [
      {
        name: 'Bandeja Negra',
        weight: 0.25,
        stock:50,
 
        
      },
      {
        name: 'Bandeja verde',
        weight: 0.3,
        stock:60,

        
      }
    ], {})

    await queryInterface.bulkInsert('storages', [
      {
        name: 'Bodega 1',
      },
      {
        name: 'Bodega 2',
      },
    
    ], {})

    await queryInterface.bulkInsert('pallets', [
      {
        trays: 230,
        variety_id:1001,
        max:240,
        tray_id:1001,
        storage_id: 1001
      },
      {
        trays: 220,
        variety_id:1002,
        max:240,
        tray_id:1001,
        storage_id: 1001
      },
      {
        trays: 240,
        variety_id:1002,
        max:240,
        tray_id:1002,
        storage_id: 1002
      },
      {
        trays: 240,
        variety_id:1001,
        max:240,
        tray_id:1002,
        storage_id: 1002
      }
    ], {})

  },


};
