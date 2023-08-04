type User = {
  id: number;
  name: string;
  address: string;
  addressNumber: number;
};

const UserDB = {
  findById: (userId: number):unknown => ({id: userId, name: 'Jorel'}),
};

function getUser(userId: number): User {
  const user = UserDB.findById(userId) as User;
  user.address = 'Rua tal';
  user.addressNumber = 1;
  return user;
};

console.log(getUser(1));
