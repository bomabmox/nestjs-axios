import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

import { Cat } from './interfaces/cat.interface';
import { User } from './interfaces/user.interface';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private catsService: CatsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  getAll(): string {
    return 'This action returns all cats';
  }

  @Get('usersstatic')
  getUsersStatic(): User[] {
    return this.catsService.getUsersStatic();
  }

  @Get('userspromise')
  async getUsersPromise(): Promise<any> {
    return this.catsService.getUsersPromise();
  }

  @Get('users')
  getUsers(): Observable<AxiosResponse<User[]>> {
    return this.catsService.getUsers();
  }

  @Get('usersmock')
  getUsersMock(): Observable<AxiosResponse<User[]>> {
    return this.catsService.getUsersMock();
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.catsService.findAll();
  }
}
