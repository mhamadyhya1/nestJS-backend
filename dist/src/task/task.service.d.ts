import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    findAllTask(): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
    findAll(pages: number, limit: number): Promise<{
        count: number;
        data: import(".prisma/client").Task[];
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    update(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    assignTaskByUser(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    filteringTask(updateTaskDto: UpdateTaskDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
}
