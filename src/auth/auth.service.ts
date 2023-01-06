import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as argon from 'argon2';
import { BadRequestException } from '@nestjs/common/exceptions';
@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService, private jwtService:JwtService){}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  async signUp(createAuthDto: CreateAuthDto) {
    let created:{}
    const hashedPass = await argon.hash(createAuthDto.password)
    const checkEmail = this.prisma.user.findFirst({where:{email:createAuthDto.email}})
    console.log("user",checkEmail)
    // if(checkEmail!=undefined){
    //   throw new ForbiddenException('message')
    // }
    created = await this.prisma.user.create({data:{email:createAuthDto.email,password:hashedPass,isAdmin:createAuthDto.isAdmin}})
    return created
  }
  async login(createAuthDto: CreateAuthDto){
    const checkUser = await this.prisma.user.findUnique({where:{email:createAuthDto.email}})
    if(!checkUser){
      throw new BadRequestException('Email does not exists, Create New Account')
    } 
    const isMatch = await argon.verify(checkUser.password,createAuthDto.password)
    if(isMatch==false){
      throw new BadRequestException('Password incorrect')
    }
    const payload = { id:checkUser.id };
    return {
      access_token: this.jwtService.sign(payload),
      data: checkUser}
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return  this.prisma.user.delete({where:{id:id}})
  }
}
