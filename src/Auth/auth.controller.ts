import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './DTO/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerive: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signup')
  async signUp(@Body() signUpData: AuthDTO) {
    return this.authSerive.signUp(signUpData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  async signIn(@Body() signInData: AuthDTO) {
    return this.authSerive.signIn(signInData);
  }
}
