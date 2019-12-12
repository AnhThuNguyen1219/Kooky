import { Food } from './food';

export class User{
    id:number;
    username:string;
    password:string;
    email:string;
    avatar:string;
    food:Food[];
    comment:Comment[];
}