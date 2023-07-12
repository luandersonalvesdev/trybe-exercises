const {Employee, Address} = require('../models');

const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const result = await Employee.findAll({
    include: {
      model: Address, 
      as: 'addresses'
    }
  });
  return result;
}

// EAGER LOADING
// const getById = async (id) => {
//   const result = await Employee.findOne({
//     where: { id },
//     include: [{model: Address, as: 'addresses', attributes: {exclude: ['number']}},]
//   });
//   return result;
// }

// LAZY LOADING -> ADICIONADO FUNCAO LA NO src/controllers/employee.controller.js
const getById = async (id) => {
  const result = await Employee.findOne({
    where: { id },
  });
  return result;
}

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const result = await sequelize.transaction(async (t) => {
    const employee = await Employee.create({ firstName, lastName, age }, {transaction: t});
    await Address.create({ city, street, number, employeeId: employee.id }, {transaction: t});
    return employee;
  })

  return result;
};

module.exports = {
  getAll,
  getById,
  insert,
}