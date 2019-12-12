import { Food } from './food';

export class User{
    id:number;
    name:string;
    password:string;
    email:string;
    avatar:string;
    food:Food[];
    comment:Comment[];
}