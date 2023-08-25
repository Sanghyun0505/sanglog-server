import { Module } from '@nestjs/common';
import { RegistController } from './regist.controller';
import { RegistService } from './regist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regist } from './Entities/regist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Regist])],
  controllers: [RegistController],
  providers: [RegistService],
})
export class RegistModule {}
