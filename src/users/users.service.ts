import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  readonly users = [
    {
      id: '1',
      cpf: '12345678900',
      password: 'password1',
    },
    {
      id: '2',
      cpf: '98765432100',
      password: 'password2',
    },
  ];

  async findByCpf(cpf: string) {
    return this.users.find((user) => user.cpf === cpf);
  }

  async findById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  async findAll() {
    return this.users;
  }

  async validatePassword(cpf: string, password: string): Promise<boolean> {
    const user = await this.findByCpf(cpf);
    if (!user) return false;
    return user.password === password;
  }
}
