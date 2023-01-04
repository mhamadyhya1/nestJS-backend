import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): string;
    register(createAuthDto: CreateAuthDto): Promise<{}>;
    login(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
        data: import(".prisma/client").User;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
