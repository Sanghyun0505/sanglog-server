import { Module } from '@nestjs/common';
import { RegistModule } from './Regist/regist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Regist } from './Regist/Entities/regist.entity';
import { AuthModule } from './Auth/auth.module';
import { Auth } from './Auth/Entities/auth.entity';
import { MemberModule } from './Member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Regist, Auth],
      synchronize: true,
    }),
    RegistModule,
    AuthModule,
    MemberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
