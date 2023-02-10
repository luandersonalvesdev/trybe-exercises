const cep = '30130-010';
const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => response.json());
console.log(data);