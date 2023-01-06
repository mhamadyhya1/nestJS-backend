import { Task } from "@prisma/client";
export declare class TaskEntity implements Task {
    id: number;
    title: string;
    description: string;
    status: string;
    userID: number;
}
