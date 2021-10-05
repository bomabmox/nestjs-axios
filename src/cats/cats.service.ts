import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

import { Cat } from '../interfaces/cat.interface';
import { User } from './../interfaces/user.interface';
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

  constructor(private httpService: HttpService) {}

  findAll(): Cat[] {
    return this.cats;
  }

  getUsersStatic(): User[] {
    console.log('getUsersStatic');
    return this.users;
  }

  getUsersMock(): Observable<AxiosResponse<User[]>> {
    console.log('getUsersMock');
    return this.httpService.get(
      'https://615aa3d04a360f0017a8116e.mockapi.io/api/users',
    );
  }

  getUsers(): Observable<AxiosResponse<User[]>> {
    console.log('getUsers');
    return this.httpService.get('http://localhost:3000/usersstatic');
  }

  getUsersPromise(): Promise<AxiosResponse<any>> {
    console.log('getUsersPromise');
    return this.httpService
      .get('http://localhost:3000/usersstatic')
      .toPromise();
  }
}
