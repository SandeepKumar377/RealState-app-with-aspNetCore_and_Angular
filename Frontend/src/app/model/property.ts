import { IPropertyBase } from './iPropertyBase';

export class Property implements IPropertyBase{
    Id!: number;
    SellRent!: number;
    Name!: string;
    PType!: string;
    FType!: string;
    BHK!: number;
    BuiltArea!: number;
    City!: string;
    Price!: number;
    RTM!: number;
    CarpetArea?:number;
    FloorNo?:number;
    TotalFloor?:number;
    Address!: string;
    Address2?: string;
    Security!:number;
    Maintenance?:number;
    Image!: string;
    AOP?:string;
    Possession?:string;
    Gated!:string;
    MainEntrance?:string;
    Description?: string;
    PostedOn!: string;
    PostedBy!: number;
    image?: string;
}