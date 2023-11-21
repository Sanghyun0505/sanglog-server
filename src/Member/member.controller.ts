import { Controller, HttpCode, HttpStatus, Get, Param } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './Entities/member.entity';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getMyInfo(@Param('id') id: number): Promise<Member> {
    return await this.memberService.getMyMemberInfo(id);
  }
}
