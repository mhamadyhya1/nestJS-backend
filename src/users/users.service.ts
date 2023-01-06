import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserAuth } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}
  async create(createUserDto: CreateUserDto):Promise<UserAuth>{
    let created:{}
    const hashedPass = await argon.hash(createUserDto.password)
    let user = this.prisma.user.findFirst({where:{email:createUserDto.email}})
    console.log("user",user)
    if(user){
      throw new BadRequestException('message')
    }
    else{
      created = await this.prisma.user.create({data:{email:createUserDto.email,password:hashedPass,isAdmin:createUserDto.isAdmin}})
    }
    return created
  }
  findAll() {
    return this.prisma.user.findMany();
  }

 async findOne(id: number) {
    const user = await this.prisma.user.findUnique({where:{id:id}})
    if(!user){
      throw new NotFoundException('Not Available User')
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where:{id},
      data:updateUserDto,
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({where:{id}});
  }
}
