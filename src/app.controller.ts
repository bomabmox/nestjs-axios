import { User } from './interfaces/user.interface';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { Cat } from './interfaces/cat.interface';

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

  @Get('users')
  getUsers(): User[] {
    return this.catsService.getUsers();
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.catsService.findAll();
  }
}
