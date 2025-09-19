import { IsNumber, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNumber()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
