import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt-strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,PrismaService],
  imports:[PassportModule,JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '1h' },
  }),],
  exports: [AuthService],
})
export class AuthModule {}
