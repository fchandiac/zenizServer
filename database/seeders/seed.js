'use strict';



module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profiles', [  
      {
        name: 'Administrador',
        delete: true,
        edit: true,
        settlement: true,
        new_reception: true,
        new_dispatch: true,
        close_reception: true,
        close_dispatch: true,
        advance: true,
        users: true,

        created_at: '2022-08-01 05:45:12'
      },
      {
        name: 'Sin permisos',
        delete: false,
        edit: false,
        settlement: false,
        new_reception: false,
        new_dispatch: false,
        close_reception: false,
        close_dispatch: false,
        advance: false,
        users: false,

        created_at: '2022-08-01 05:45:12'
      }
    ], {})

    await queryInterface.bulkInsert('users', [
      {
        user: 'user',
        pass: 'user',
        name: 'User Test',
        mail: 'user@gmail.com',
        profile_id: 1001,
        created_at: '2022-08-02 05:45:12'
      }
    ], {})

    await queryInterface.bulkInsert('producers', [
      {
        rut: '16.822.404-4',
        name: 'Felipe Chandia',
        phone: '90909090',
        mail: 'mail@mail.com',
        address: 'su casa',
        created_at: '2022-08-01 05:45:12'
      },
      {
        rut: '16.822.404-5',
        name: 'Leonardo Torres',
        phone: '89898989',
        mail: 'producer@mail.com',
        address: '',
        created_at: '2022-08-02 05:45:12'
      },
      {
        rut: '77.276.497-9',
        name: 'Constanza Pavez',
        phone: '89898989',
        mail: 'karmika@mail.com',
        address: 'Parral',
        created_at: '2022-08-02 05:45:12'
      }
    ], {})

    // await queryInterface.bulkInsert('customers', [
    //   {
    //     rut: '17.822.404-4',
    //     name: 'Cliente 1',
    //     phone: '90909090',
    //     mail: 'mail@mail.com',
    //     address: 'su casa',
    //     created_at: '2022-08-01 05:45:12'
    //   },
    //   {
    //     rut: '17.822.404-5',
    //     name: 'Cliente 2',
    //     phone: '89898989',
    //     mail: '@mail.com',
    //     address: '',
    //     created_at: '2022-08-02 05:45:12'
    //   },
      
      
    // ], {})

    await queryInterface.bulkInsert('varieties', [
      {
        name: 'ESPARRAGOS ORGANICOS',
        clp: 0,
        usd: 0,
        money: 'CLP'
      },
      {
        name: 'FRAMBUESA ORGANICA',
        clp: 500,
        usd: 0,
        money: 'CLP'
      },
      {
        name: 'ARANDANO ORGANICO',
        clp: 0,
        usd: 1.5,
        money: 'USD'
      }
    ], {})

    await queryInterface.bulkInsert('types', [
      {
        name: 'IQF',
      },
      {
        name: 'BLOCK',
      },
      {
        name: 'JUGO',
      }
    ], {})

    await queryInterface.bulkInsert('trays', [
      {
        name: 'ESPARRAGUERA',
        weight: 1.5,
        stock:100,
        created_at: '2022-09-01 09:00:00'
      },
      {
        name: 'VERDE',
        weight: 0.35,
        stock:100,
        created_at: '2022-09-01 09:00:00'
        
      },
      {
        name: 'NEGRA CHICA',
        weight: 0.35,
        stock:100,
        created_at: '2022-09-01 09:00:00'
      },
      {
        name: 'BLANCA CHICA',
        weight: 0.35,
        stock:100,
        created_at: '2022-09-01 09:00:00'
      }
    ], {})

    await queryInterface.bulkInsert('storages', [
      {
        name: 'RIFFER 1',
      },
      {
        name: 'RIFFER 2',
      },
      {
        name: 'RIFFER 3',
      }, 
      {
        name: 'BODEGA',
      }
      
    
    ], {})

    // await queryInterface.bulkInsert('pallets', [
    //   {
    //     trays: 0,
    //     max:50,
    //     tray_id:1001,
    //     storage_id: 1001,
    //     weight: 15
    //   },
    //   {
    //     trays: 0,
    //     max:50,
    //     tray_id:1001,
    //     storage_id: 1001,
    //     weight: 5.8
    //   },
    //   // {
    //   //   trays: 0,
    //   //   max:60,
    //   //   tray_id:1001,
    //   //   storage_id: 1001,
    //   //   weight: 5.8
    //   // },
    //   // {
    //   //   trays: 0,
    //   //   max:240,
    //   //   tray_id:1002,
    //   //   storage_id: 1002,
    //   //   weight: 5.3
    //   // },
    //   // {
    //   //   trays: 0,
    //   //   max:240,
    //   //   tray_id:1002,
    //   //   storage_id: 1002,
    //   //   weight: 5.9
    //   // }
    // ], {})

  },


};
