import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoas usuárias do Github: ${Functions.getUserName(users)}`);

console.log(`Pessoas com pelo menos 15 repositórios: ${Functions.getUsersByRepoQuantity(users, 15)}`);

console.log(`Essa é a conta mais ativa da lista? ${Functions.isMostActiveUser(users, 'Ex 3')}`);
