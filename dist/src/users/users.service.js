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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        let created;
        const hashedPass = await argon.hash(createUserDto.password);
        let user = this.prisma.user.findFirst({ where: { email: createUserDto.email } });
        console.log("user", user);
        if (user) {
            throw new common_1.BadRequestException('message');
        }
        else {
            created = await this.prisma.user.create({ data: { email: createUserDto.email, name: createUserDto.name, password: hashedPass, isAdmin: createUserDto.isAdmin } });
        }
        return created;
    }
    findAll() {
        return this.prisma.user.findMany({ select: { name: true, id: true } });
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({ where: { id: id } });
        if (!user) {
            throw new common_1.NotFoundException('Not Available User');
        }
        return user;
    }
    update(id, updateUserDto) {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
    }
    removeAll() {
        return this.prisma.user.deleteMany();
    }
    remove(id) {
        return this.prisma.user.delete({ where: { id } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map