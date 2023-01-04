import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(createAuthDto: CreateAuthDto): string;
    signUp(createAuthDto: CreateAuthDto): Promise<{}>;
    login(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
        data: import(".prisma/client").User;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
