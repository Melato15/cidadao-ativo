import { Controller, UseGuards, Get, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':cpf')
  @UseGuards(AuthGuard)
  findByCpf(@Param('cpf') cpf: string) {
    return this.usersService.findByCpf(cpf);
  }
}
