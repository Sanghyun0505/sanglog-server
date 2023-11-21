import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/Auth/Entities/auth.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Auth) private memberRepository: Repository<Auth>,
  ) {}

  async getMyMemberInfo(id: number): Promise<Auth> {
    const member = await this.memberRepository.findOne({ where: { id } });
    if (!member) {
      throw new NotFoundException('not found');
    }
    return member;
  }
}
