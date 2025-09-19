import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async citizenLogin(
    cpf: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByCpf(cpf);
    console.log(cpf);
    console.warn(user);
    if (!user || !(await this.usersService.validatePassword(cpf, password))) {
      throw new UnauthorizedException({
        description: 'Credenciais inválidas.',
      });
    }
    const payload = { sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
        expiresIn: '1h',
      }),
    };
  }

  async coucilorLogin(
    cpf: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByCpf(cpf);
    if (!user || !(await this.usersService.validatePassword(cpf, password))) {
      throw new UnauthorizedException({
        description: 'Credenciais inválidas.',
      });
    }
    const payload = { sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
        expiresIn: '1h',
      }),
    };
  }
}
