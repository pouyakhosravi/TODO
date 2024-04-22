import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log(54);

    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(loginDTO: LoginDTO) {
    const user = await this.usersService.findByEmail(loginDTO.email);
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    const salt = this.configService.get<string | number>('salt');
    if (!salt) {
      throw new InternalServerErrorException();
    }

    const passwordValid = await bcrypt.compare(
      loginDTO.password + salt,
      user.password,
    );

    if (user.password && user.email && passwordValid) {
      const payload = {
        email: loginDTO.email,
        password: loginDTO.password,
      };

      return {
        access_token: this.jwtService.sign(payload, {
          secret: this.configService.get<string>('jwtSecretKey'),
        }),
      };
    } else {
      throw new NotAcceptableException('Could not find the user');
    }
  }
}
