import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskEntity } from './entities/task.entity';
import { ParseIntPipe } from '@nestjs/common/pipes';

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
  @Get('all')
  @ApiOkResponse({ type: TaskEntity, isArray: false })
  findAll(@Query('page',ParseIntPipe) page:number ,@Query('limit',ParseIntPipe) limit:number ) {
    return this.taskService.findAll(page,limit);
  }

  @Get(':id')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
  @Get('Tasksss')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  findAllTask(){
    return this.taskService.findAllTask();
  }
}
