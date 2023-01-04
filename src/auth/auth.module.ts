import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constant';
import { JwtStrategy } from './strategy/jwt-strategy';
import { PrismaService } from 'src/prisma/prisma.service';
const secret = process.env.SECRET_KEY_JWT || 'n2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B';
const expiresIn = process.env.EXPIRES_IN_JWT || '1h';
@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,PrismaService],
  imports: [PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret,
        signOptions: { expiresIn },
      }),
    }),]
  
})
export class AuthModule {}
