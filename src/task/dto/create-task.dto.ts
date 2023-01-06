import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({required:true})
    title: string;
    @ApiProperty({required:false})
    description?:string;
    @ApiProperty()
    status:string;
    @ApiProperty({required:false})
    userID:number
}
