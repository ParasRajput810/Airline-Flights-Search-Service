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

    await queryInterface.bulkInsert('Airplanes' , [{
      model_number : "MOL1 L",
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    model_number : "SOL1 L",
    capacity: 310,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: "MRAM L",
    capacity: 210,
    createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    model_number : "BU33 L",
    capacity: 320,
    createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    model_number: "MVN1 L",
    capacity: 400,
    createdAt: new Date(),
      updatedAt: new Date()
  },
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
