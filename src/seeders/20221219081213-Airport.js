'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports' , [{
      name : "INDIRA GANDHI INTERNATIONAL AIRPORT",
      cityId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    name : "SAFDARJUNT AIRPORT",
    cityId: 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "INDIRA GANDHI INTERNATIONAL AIRPORT TERMINAL(1)",
    cityId: 14,
    createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    name : "Pune International Airport",
    cityId: 6,
    createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    name : "Sri Guru Ram Dass Jee International Airport, Amritsar",
    cityId: 8,
    createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    name : "Ludhiana Airport (LUH)",
    cityId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name : "Vijayawada International Airport",
    cityId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name : "Visakhapatnam International Airport",
    cityId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
