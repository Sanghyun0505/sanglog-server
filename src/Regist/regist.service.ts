import { Injectable, NotFoundException } from '@nestjs/common';
import { Regist } from './Entities/regist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistDTO } from './DTO/regist.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegistService {
  constructor(
    @InjectRepository(Regist)
    private registRepository: Repository<Regist>,
    private jwtService: JwtService,
  ) {}

  async getAllRegistedPosts(): Promise<Regist[]> {
    return await this.registRepository.find({
      select: ['id', 'title', 'subtitle', 'image'],
    });
  }

  async getRegisteredSinglePost(id: number): Promise<Regist> {
    const regist = await this.registRepository.findOne({ where: { id } });
    if (!regist) {
      throw new NotFoundException('not found');
    }
    return regist;
  }

  async registPost(registData: RegistDTO) {
    return await this.registRepository.save(registData);
  }

  async deleteRegistedPost(id: number): Promise<number> {
    await this.registRepository.delete(id);
    return id;
  }

  async patchRegistedPost(id: number, patchData: RegistDTO): Promise<number> {
    await this.registRepository.update(id, patchData);
    return id;
  }
}
