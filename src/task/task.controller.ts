import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskEntity } from './entities/task.entity';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { AuthGuard } from '@nestjs/passport';
import { map } from 'rxjs';
import { title } from 'process';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }
  @Post('filter')
  @ApiOkResponse({ type: TaskEntity})
  filteration(@Body() createTaskDto: UpdateTaskDto){
    return this.taskService.filteringTask(createTaskDto)
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('allPaginated')
  @ApiOkResponse({ type: TaskEntity, isArray: false })
  async findAll(@Query('page',ParseIntPipe) page:number ,@Query('limit',ParseIntPipe) limit:number ) {
    const result = await this.taskService.findAllPaginated(page,limit)
    return result
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete('/all')
  removeAll() {
    return this.taskService.removeAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('Tasksss')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  findAllTask(){
    return this.taskService.findAllTask();
  }
}
