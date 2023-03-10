import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<Partial<Pick<import("./entities/user.entity").UserEntity, "email" | "password" | "isAdmin">>>;
    findAll(): import(".prisma/client").PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    removeAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
