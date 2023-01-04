import { User } from "@prisma/client";

export interface UserEntity extends User {
    id: number;
    email: string;
    password: string;
    isAdmin:number;
}
export type UserAuth = Partial<Pick<UserEntity,'email'|'password'|'isAdmin'>>