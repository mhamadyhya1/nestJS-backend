import { User } from "@prisma/client";

export class Auth {}
export class AuthEntity implements User {
    id: number;
    email: string;
    password: string;
    isAdmin: number;
    
}
export type UserAuth = Partial<Pick<AuthEntity,'email'|'password'>>
