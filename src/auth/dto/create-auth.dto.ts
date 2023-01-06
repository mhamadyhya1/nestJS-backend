export class CreateAuthDto {
    email:string;
    password:string;
    name:string;
    isAdmin?:number
}
export class loginAuthDto {
    email:string;
    password:string;
}