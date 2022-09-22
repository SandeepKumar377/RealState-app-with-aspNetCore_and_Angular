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
    totalFloors?:number;
    address?: string;
    address2?: string;
    security?:number;
    maintenance?:number;
    age?:string;
    estPossessionOn?:Date;
    gated?:boolean;
    mainEntrance?:string;
    description?: string;
}