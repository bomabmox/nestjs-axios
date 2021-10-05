import { Injectable } from '@nestjs/common';

import { User } from './../interfaces/user.interface';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: 'joe',
      age: 2,
      breed: 'balck',
    },
    {
      name: 'fifi',
      age: 3,
      breed: 'white',
    },
  ];

  private readonly users: User[] = [
    { firstname: 'Emilia', lastname: 'Jacobi', id: '1' },
    { firstname: 'Curt', lastname: 'Blick', id: '2' },
    { firstname: 'Alphonso', lastname: 'Bayer', id: '3' },
    { firstname: 'Philip', lastname: 'Russel', id: '4' },
    { firstname: 'Adriel', lastname: 'Skiles', id: '5' },
    { firstname: 'Samir', lastname: 'Muller', id: '6' },
    { firstname: 'Justine', lastname: 'Cartwright', id: '7' },
    { firstname: 'Keegan', lastname: 'Boyle', id: '8' },
    { firstname: 'Rudolph', lastname: 'McCullough', id: '9' },
    { firstname: 'Marge', lastname: 'Tromp', id: '10' },
  ];

  findAll(): Cat[] {
    return this.cats;
  }

  getUsersStatic(): User[] {
    return this.users;
  }

  getUsers(): User[] {
    return this.users;
  }
}
