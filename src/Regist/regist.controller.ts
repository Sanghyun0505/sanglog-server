import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Headers,
} from '@nestjs/common';
import { RegistService } from 'src/Regist/regist.service';
import { Regist } from './Entities/regist.entity';

@Controller('regist')
export class RegistController {
  constructor(private readonly registService: RegistService) {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async getAllRegistedPosts(): Promise<Regist[]> {
    return await this.registService.getAllRegistedPosts();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getRegisteredSinglePost(@Param('id') id: number): Promise<Regist> {
    return await this.registService.getRegisteredSinglePost(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async registPost(
    @Body() registData,
    @Headers('Authorization') authorization: string,
  ) {
    console.log(authorization);
    return await this.registService.registPost(registData);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteRegistedPost(
    @Param('id') id: number,
    @Headers('Authorization') authorization: string,
  ) {
    console.log(authorization);
    return this.registService.deleteRegistedPost(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  patchRegistedPost(
    @Param('id') id: number,
    @Body() updateData,
    @Headers('Authorization') authorization: string,
  ) {
    console.log(authorization);
    return this.registService.patchRegistedPost(id, updateData);
  }
}
