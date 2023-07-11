const {Employee, Address} = require('../models');

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

module.exports = {
  getAll,
  getById,
}