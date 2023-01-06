import { User } from "@prisma/client";
export declare class Auth {
}
export declare class AuthEntity implements User {
    id: number;
    email: string;
    name: string;
    password: string;
    isAdmin: number | null;
}
export type UserAuth = Partial<Pick<AuthEntity, 'email' | 'password'>>;
