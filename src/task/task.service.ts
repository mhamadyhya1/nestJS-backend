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
  async findAllPaginated(pages:number,limit?:number) {
    const take =  limit
    console.log(take)
    const page=pages || 1;
    const skip= (page-1) * take ;
    const total = await this.prisma.task.count();
    const count = Math.ceil(total/limit)
    const filtered =  await this.prisma.task.findMany({include:{assignee:true},take:take,skip:skip});
    return { count,data:filtered}
  }
  async find(){
    const tasks  = await this.prisma.user.findMany()
    return tasks
  }
  findOne(id: number) {
    return this.prisma.task.findUnique({where:{id}})
  }
  async asignATask(id:number, updateTaskDto: UpdateTaskDto){
    const task = await this.prisma.task.update({where:{id},data:updateTaskDto})
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
      data:{userID:updateTaskDto.userID},
    })
  }
  remove(id: number) {
    return this.prisma.task.delete({where:{id}});
  }
  removeAll(){
    return this.prisma.task.deleteMany();
  }
  filteringTask(updateTaskDto: UpdateTaskDto){
    const data = this.prisma.task.findMany({
      where:{OR:[
        {userID:updateTaskDto.userID},
        {status:updateTaskDto.status}
      ]}
    })
    return data
  }
}
