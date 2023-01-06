import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { IsEmail } from "class-validator";

export class Auth {}
export class AuthEntity implements User {
    id: number;
    @ApiProperty()
    @IsEmail()
    email: string;
    name:string;
    password: string;
    isAdmin: number | null;
    
}
export type UserAuth = Partial<Pick<AuthEntity,'email'|'password'>>
