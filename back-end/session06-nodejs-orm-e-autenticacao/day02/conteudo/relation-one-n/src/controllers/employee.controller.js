const {employeeService, addressService} = require('../service');

const getAll = async (req, res) => {
  const result = await employeeService.getAll();
  return res.status(200).json(result);
}

// EAGER LOADING
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await employeeService.getById(id);

//     if(!employee) return res.status(404).json({message: 'Pessoa colaboradora não encontrada'});

//     return res.status(200).json(employee);
//   } catch (error) {
//     console.log(error);
//     return res.status(200).json({ message: 'Erro' });
//   }
// }

// LAZY LOADING -> ADICIONADO FUNCAO LA NO src/services/address.service.js
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
    }

    if (req.query.includeAddresses === 'true') {
      const addresses = await addressService.getAllByEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

const insert = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await employeeService.insert(
      { firstName, lastName, age, city, street, number },
    );

    return res.status(201).json({ id: employee.id, message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

module.exports = {
  getAll,
  getById,
  insert,
}