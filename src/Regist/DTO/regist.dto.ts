import { IsString } from 'class-validator';

export class RegistDTO {
  @IsString()
  readonly title?: string;

  @IsString()
  readonly subtitle?: string;

  @IsString()
  readonly image?: string;

  @IsString()
  readonly content?: string;
}
