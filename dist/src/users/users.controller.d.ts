import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<Partial<Pick<import("./entities/user.entity").UserEntity, "email" | "password" | "isAdmin">>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
}
