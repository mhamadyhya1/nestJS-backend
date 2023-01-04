import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma:PrismaService){}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({data:createTaskDto});
  }
  findAllTask(){
    return this.prisma.task.findMany()
  }
  async findAll(pages:number,limit:number) {
    const take =  limit
    console.log(take)
    const page=pages || 1;
    const skip= (page-1) * take ;
    const total = this.prisma.task.count();
    const data =  this.prisma.task.findMany({take:take,skip:skip});
    const dataresponse = {count:total,data:data}
    return dataresponse
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({where:{id}})
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where:{id},
      data:updateTaskDto,
    })
  }
  assignTaskByUser(id: number, updateTaskDto: UpdateTaskDto){
    return this.prisma.task.update({
      where:{id},
      data:{assignee:updateTaskDto.assignee},
    })
  }
  remove(id: number) {
    return this.prisma.task.delete({where:{id}});
  }
  filteringTask(updateTaskDto: UpdateTaskDto){
    const data = this.prisma.task.findMany({
      where:{OR:[
        {assignee:updateTaskDto.assignee},
        {status:updateTaskDto.status}
      ]}
    })
    return data
  }
}
