"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createTaskDto) {
        return this.prisma.task.create({ data: createTaskDto });
    }
    findAllTask() {
        return this.prisma.task.findMany();
    }
    async findAll(pages, limit) {
        const take = limit;
        console.log(take);
        const page = pages || 1;
        const skip = (page - 1) * take;
        const total = this.prisma.task.count();
        const data = this.prisma.task.findMany({ take: take, skip: skip });
        const dataresponse = { count: total, data: data };
        return dataresponse;
    }
    findOne(id) {
        return this.prisma.task.findUnique({ where: { id } });
    }
    update(id, updateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: updateTaskDto,
        });
    }
    assignTaskByUser(id, updateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: { assignee: updateTaskDto.assignee },
        });
    }
    remove(id) {
        return this.prisma.task.delete({ where: { id } });
    }
    filteringTask(updateTaskDto) {
        const data = this.prisma.task.findMany({
            where: { OR: [
                    { assignee: updateTaskDto.assignee },
                    { status: updateTaskDto.status }
                ] }
        });
        return data;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map