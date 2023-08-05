type User2 = {
  id: number;
  name: string;
  address: string;
  addressNumber: number;
};

const UserDB2 = {
  findById: (userId: number) => ({id: userId, name: 'Jorel'}),
};

function getUser2(userId: number): User2 {
  const user = UserDB2.findById(userId);
  const userWithAddress: User2 = {
    ...user,
    address: 'Rua tal',
    addressNumber: 3,
  }
  return userWithAddress;
};

console.log(getUser2(1));
