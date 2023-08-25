import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const verifyAccessToken = (
  accessToken: string,
  jwtService: JwtService,
): any => {
  try {
    const payload = jwtService.verify(accessToken);
    return payload;
  } catch (error) {
    throw new UnauthorizedException('Invalid token');
  }
};
