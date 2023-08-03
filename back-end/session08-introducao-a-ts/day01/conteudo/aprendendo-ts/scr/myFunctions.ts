import {User} from './types/User';

export const getUserName = (userList: User[]): string[] => userList.map((user) => user.name);

export const getUsersByRepoQuantity = (userList: User[], quantity: number): string[] => 
  userList.filter((user) => user.repositories >= quantity).map((user) => user.name);

export const isMostActiveUser = (userList: User[], name: string): boolean => {
  const mostActiveUser = userList.reduce((prev, curr) => prev.repositories > curr.repositories ? prev : curr);
  return mostActiveUser.name === name;
};