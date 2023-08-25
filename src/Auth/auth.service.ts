import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './Entities/auth.entity';
import { Repository } from 'typeorm';
import { AuthDTO } from './DTO/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpData: AuthDTO) {
    const { userId, password } = signUpData;

    const existingUser = await this.authRepository.findOne({
      where: { userId },
    });

    if (existingUser) {
      throw new ConflictException('User with this userId already exists');
    }

    return this.authRepository.save({ userId, password, role: 'MEMBER' });
  }

  async signIn(signInData: AuthDTO) {
    const { userId, password } = signInData;
    const user = await this.authRepository.findOne({ where: { userId } });

    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, userId: user.userId, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
