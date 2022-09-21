import { IPropertyBase } from './iPropertyBase';

export class Property implements IPropertyBase{
    id!: number;
    sellRent!: number;
    name!: string;
    propertyType!: string;
    furnishingType!: string;
    price!: number;
    bhk!: number;
    builtArea!: number;
    cityName!: string;
    readyToMove!: number;
    image!: string;
    carpetArea?:number;
    floorNo?:number;
    totalFloor?:number;
    address?: string;
    address2?: string;
    security?:number;
    maintenance?:number;
    age?:string;
    possession?:string;
    gated?:string;
    mainEntrance?:string;
    description?: string;
    postedOn?: string;
    postedBy?: number;
}