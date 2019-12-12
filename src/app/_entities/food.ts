
export class Food{
    id:number;
    foodName:string;
    prepareTime:string;
    cookTime:string;
    image:string;
    material:string;
    step:Step[];
    gerne:Gerne;
    comment:Comment[];
}
export interface Step
{
    Id:number;
    No:number;
    Content:string;
    foodId:number;
}
export interface Gerne
{
    GerneId:number;
    GerneName:string;
    foods:Food[];
}
export interface Comment
{
    Id:number;
    Content:string;
    userId:number;
    foodId:number;
}