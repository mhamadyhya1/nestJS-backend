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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const exceptions_1 = require("@nestjs/common/exceptions");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    async signUp(createAuthDto) {
        let created;
        const hashedPass = await argon.hash(createAuthDto.password);
        const checkEmail = this.prisma.user.findFirst({ where: { email: createAuthDto.email } });
        console.log("user", checkEmail);
        created = await this.prisma.user.create({ data: { email: createAuthDto.email, password: hashedPass, isAdmin: createAuthDto.isAdmin } });
        return created;
    }
    async login(createAuthDto) {
        const payload = { id: createAuthDto.email };
        const checkUser = await this.prisma.user.findUnique({ where: { email: createAuthDto.email } });
        if (!checkUser) {
            throw new exceptions_1.ForbiddenException('Email does not exists, Create New Account');
        }
        const isMatch = await argon.verify(checkUser.password, createAuthDto.password);
        if (isMatch == false) {
            throw new exceptions_1.ForbiddenException('Password incorrect');
        }
        return {
            access_token: this.jwtService.sign(payload),
            data: checkUser
        };
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map