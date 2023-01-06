import { ApiProperty } from "@nestjs/swagger";
import { Task } from "@prisma/client";

export class TaskEntity implements Task {
    @ApiProperty()
    id: number;
    @ApiProperty({required:true})
    title: string;
    @ApiProperty({required:false, nullable:true})
    description: string;
    @ApiProperty()
    status: string;
    @ApiProperty({required:false, nullable:true})
    userID: number;
    
}
